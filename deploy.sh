#!/usr/bin/env bash
#
# QMKB 一键部署脚本
# Quantum Mechanics Knowledge Base — 量子力学知识库
#
# 功能：Lint 检查 → 构建 → 部署 → 健康检查
#

set -euo pipefail

# ============================================
# 配置
# ============================================
PROJECT_DIR="/home/ec2-user/.hermes/profiles/qm/home/qmkb"
WEB_DIR="/home/wwwroot/qm.pinkoculture.com"
DOMAIN="qm.pinkoculture.com"
NGINX_VHOST="/usr/local/nginx/conf/vhost/${DOMAIN}.conf"
BUILD_DIR="${PROJECT_DIR}/.vitepress/dist"
NODE_BIN="/home/ec2-user/.hermes/node/bin"

# 颜色输出
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# ============================================
# 辅助函数
# ============================================
log_info()  { echo -e "${BLUE}[INFO]${NC}  $1"; }
log_ok()    { echo -e "${GREEN}[OK]${NC}   $1"; }
log_warn()  { echo -e "${YELLOW}[WARN]${NC}  $1"; }
log_err()   { echo -e "${RED}[ERR]${NC}  $1"; }

header() {
  echo ""
  echo "========================================"
  echo "  $1"
  echo "========================================"
  echo ""
}

# ============================================
# 1. 环境检查
# ============================================
cd "$PROJECT_DIR"

header "QMKB 部署开始"
log_info "项目目录: $PROJECT_DIR"
log_info "部署目录: $WEB_DIR"
log_info "域名:    $DOMAIN"

# 检查 Node.js
if ! command -v node &>/dev/null && ! [ -x "$NODE_BIN/node" ]; then
  log_err "未找到 Node.js，请先安装"
  exit 1
fi
export PATH="$NODE_BIN:$PATH"

# 检查 npm 依赖
if [ ! -d "node_modules/vitepress" ]; then
  log_warn "未找到 node_modules，正在安装依赖..."
  npm install
fi

# ============================================
# 2. Lint 检查 (llm-wiki Schema 规则)
# ============================================
header "Step 1: Lint 检查"
log_info "运行 schema 规则检查..."

LINT_EXIT=0
node scripts/lint.js || LINT_EXIT=$?

if [ $LINT_EXIT -ne 0 ]; then
  echo ""
  log_warn "Lint 检查发现问题，自动继续部署..."
fi

if [ $LINT_EXIT -eq 0 ]; then
  log_ok "Lint 检查通过"
fi

# ============================================
# 3. 构建
# ============================================
header "Step 2: VitePress 构建"
log_info "正在构建静态网站..."

npm run build

if [ ! -d "$BUILD_DIR" ] || [ ! -f "$BUILD_DIR/index.html" ]; then
  log_err "构建失败：未找到 $BUILD_DIR/index.html"
  exit 1
fi

BUILD_SIZE=$(du -sh "$BUILD_DIR" | cut -f1)
BUILD_FILES=$(find "$BUILD_DIR" -type f | wc -l)
log_ok "构建成功！共 $BUILD_FILES 个文件，大小 $BUILD_SIZE"

# ============================================
# 4. 部署
# ============================================
header "Step 3: 部署到服务器"
log_info "同步构建产物（rsync --delete 清理旧版本残留）..."
sudo rsync -a --delete "${BUILD_DIR}/" "${WEB_DIR}/"

sudo chown -R www:www "$WEB_DIR"

DEPLOYED_FILES=$(find "$WEB_DIR" -type f | wc -l)
log_ok "部署完成！共 $DEPLOYED_FILES 个文件已发布"

# ============================================
# 5. Nginx 检查
# ============================================
header "Step 4: Nginx 检查"
log_info "测试 nginx 配置..."

if sudo nginx -t 2>&1 | grep -q "successful"; then
  log_ok "nginx 配置测试通过"
  log_info "重载 nginx..."
  sudo systemctl reload nginx
  log_ok "nginx 已重载"
else
  log_err "nginx 配置测试失败"
  sudo nginx -t
  exit 1
fi

# ============================================
# 6. 健康检查
# ============================================
header "Step 5: 健康检查"
log_info "测试本地 HTTP/HTTPS 响应..."

HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" -H "Host: $DOMAIN" http://127.0.0.1/)
if [ "$HTTP_CODE" = "301" ]; then
  log_ok "HTTP 跳转 HTTPS: 301 ✓"
else
  log_warn "HTTP 响应异常: $HTTP_CODE (期待 301)"
fi

HTTPS_CODE=$(curl -s -o /dev/null -w "%{http_code}" -k -H "Host: $DOMAIN" https://127.0.0.1/)
if [ "$HTTPS_CODE" = "200" ]; then
  log_ok "HTTPS 访问: 200 ✓"
else
  log_err "HTTPS 响应异常: $HTTPS_CODE (期待 200)"
  exit 1
fi

TITLE=$(curl -s -k -H "Host: $DOMAIN" https://127.0.0.1/ | grep -o '<title>[^<]*</title>' | head -1)
log_info "页面标题: $TITLE"

# 检查 404 页面
NOTFOUND_CODE=$(curl -s -o /dev/null -w "%{http_code}" -k -H "Host: $DOMAIN" "https://127.0.0.1/nonexistent-page-12345")
if [ "$NOTFOUND_CODE" = "404" ]; then
  log_ok "404 页面正常: $NOTFOUND_CODE ✓"
else
  log_warn "404 页面响应: $NOTFOUND_CODE (期待 404)"
fi

# 检查证书有效期
CERT_DAYS=$(sudo openssl x509 -in "/etc/letsencrypt/live/$DOMAIN/fullchain.pem" -noout -dates 2>/dev/null | grep notAfter | cut -d= -f2)
if [ -n "$CERT_DAYS" ]; then
  log_info "SSL 证书有效期至: $CERT_DAYS"
fi

# ============================================
# 7. 部署日志
# ============================================
header "部署完成"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
echo "部署时间: $TIMESTAMP"
echo "部署文件数: $DEPLOYED_FILES"
echo "构建目录大小: $BUILD_SIZE"
echo "HTTPS 状态: $HTTPS_CODE OK"
echo "访问地址: https://$DOMAIN"
echo ""
log_ok "✅ QMKB 量子力学知识库部署成功！"
echo ""
