import { defineConfig } from 'vitepress'
import { readdirSync, readFileSync, statSync, existsSync } from 'fs'
import { join } from 'path'

const PROJECT_DIR = '/home/ec2-user/.hermes/profiles/qm/home/qmkb'

// ============================================
// 动态读取文件和 frontmatter
// ============================================
function getTitle(dir, file) {
  try {
    const content = readFileSync(join(PROJECT_DIR, dir, `${file}.md`), 'utf8')
    // 匹配 YAML frontmatter：--- 开头、--- 结尾，支持 \n 和 \r\n
    const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/)
    if (fmMatch) {
      const titleMatch = fmMatch[1].match(/^title:\s*(.+)$/m)
      if (titleMatch) {
        return titleMatch[1].trim().replace(/^["']|["']$/g, '')
      }
    }
  } catch {}
  return file.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
}

function getMdFiles(dir) {
  const fullPath = join(PROJECT_DIR, dir)
  if (!existsSync(fullPath)) return []
  return readdirSync(fullPath)
    .filter(f => {
      if (!f.endsWith('.md')) return false
      const stat = statSync(join(fullPath, f))
      return stat.isFile()
    })
    .map(f => f.replace(/\.md$/, ''))
    .sort()
}

function getSubdirs(dir) {
  const fullPath = join(PROJECT_DIR, dir)
  if (!existsSync(fullPath)) return []
  return readdirSync(fullPath)
    .filter(f => {
      const p = join(fullPath, f)
      try {
        return statSync(p).isDirectory() && !f.startsWith('.')
      } catch { return false }
    })
    .sort()
}

/**
 * 递归构建 sidebar
 * @param {string} dir - 目录相对路径
 * @param {string} sectionTitle - 区块标题
 * @returns {Array} sidebar items
 */
function buildSidebar(dir, sectionTitle) {
  const items = []
  
  // 1. 索引页入口（最上方）
  const hasIndex = existsSync(join(PROJECT_DIR, dir, 'index.md'))
  if (hasIndex) {
    items.push({
      text: sectionTitle,
      link: `/${dir}/`,
    })
  }
  
  // 2. 子目录（如果有的话）
  const subdirs = getSubdirs(dir)
  for (const subdir of subdirs) {
    const subdirPath = `${dir}/${subdir}`
    const subFiles = getMdFiles(subdirPath).filter(f => f !== 'index')
    const subItems = subFiles.map(f => ({
      text: getTitle(subdirPath, f),
      link: `/${subdirPath}/${f}`
    }))
    
    // 如果子目录有自己的 index.md，也加入
    const hasSubIndex = existsSync(join(PROJECT_DIR, subdirPath, 'index.md'))
    if (hasSubIndex) {
      subItems.unshift({
        text: getTitle(subdirPath, 'index') || `${subdir} 概览`,
        link: `/${subdirPath}/`
      })
    }
    
    if (subItems.length > 0) {
      items.push({
        text: subdir.replace(/-/g, ' ').replace(/\\b\\w/g, l => l.toUpperCase()),
        collapsed: false,
        items: subItems
      })
    }
  }
  
  // 3. 当前目录下的文件（排除 index）
  const files = getMdFiles(dir).filter(f => f !== 'index')
  if (files.length > 0) {
    // 如果已经有子目录，将文件放入一个分组
    if (subdirs.length > 0) {
      items.push({
        text: '其他文章',
        collapsed: false,
        items: files.map(f => ({
          text: getTitle(dir, f),
          link: `/${dir}/${f}`
        }))
      })
    } else {
      // 没有子目录，就直接列出文件
      items.push(...files.map(f => ({
        text: getTitle(dir, f),
        link: `/${dir}/${f}`
      })))
    }
  }
  
  return items
}

// ============================================
// 一级分类配置
// ============================================
const categories = [
  { dir: 'concepts', label: '核心概念' },
  { dir: 'people', label: '量子先驱' },
  { dir: 'experiments', label: '著名实验' },
  { dir: 'applications', label: '应用与前沿' },
  { dir: 'resources', label: '资源汇总' },
  { dir: 'interpretations', label: '量子力学诠释' },
  { dir: 'history', label: '历史事件' },
  { dir: 'comparisons', label: '对比分析' },
  { dir: 'entities', label: '实体' },
  { dir: 'queries', label: '查询归档' },
]

// 顶部导航：保留高频一级入口；学习路径/概念图谱保留在首页显著入口
const nav = [
  { text: '首页', link: '/', activeMatch: '^/$' },
  { text: '核心概念', link: '/concepts/', activeMatch: '^/concepts/' },
  { text: '应用与前沿', link: '/applications/', activeMatch: '^/applications/' },
  { text: '量子诠释', link: '/interpretations/', activeMatch: '^/interpretations/' },
  { text: '对比分析', link: '/comparisons/', activeMatch: '^/comparisons/' },
  {
    text: '更多',
    items: [
      { text: '量子先驱', link: '/people/' },
      { text: '著名实验', link: '/experiments/' },
      { text: '历史事件', link: '/history/' },
      { text: '资源汇总', link: '/resources/' },
      { text: '实体', link: '/entities/' },
      { text: '查询归档', link: '/queries/' },
    ]
  }
]

// 左侧导航
const sidebar = {}
for (const c of categories) {
  // concepts 按四阶段特殊处理
  if (c.dir === 'concepts') {
    sidebar[`/${c.dir}/`] = [
      { text: '核心概念', link: '/concepts/' },
      {
        text: '阶段一：经典物理的黄昏',
        collapsed: false,
        items: [
          { text: getTitle('concepts', 'black-body-radiation'), link: '/concepts/black-body-radiation' },
          { text: getTitle('concepts', 'ultraviolet-catastrophe'), link: '/concepts/ultraviolet-catastrophe' },
          { text: getTitle('concepts', 'photoelectric-effect'), link: '/concepts/photoelectric-effect' },
          { text: getTitle('concepts', 'energy-quantization'), link: '/concepts/energy-quantization' },
          { text: getTitle('concepts', 'photon'), link: '/concepts/photon' },
        ]
      },
      {
        text: '阶段二：量子世界初探',
        collapsed: false,
        items: [
          { text: getTitle('concepts', 'wave-particle-duality'), link: '/concepts/wave-particle-duality' },
          { text: getTitle('concepts', 'quantization-energy-levels'), link: '/concepts/quantization-energy-levels' },
          { text: getTitle('concepts', 'matter-wave'), link: '/concepts/matter-wave' },
          { text: getTitle('concepts', 'complementarity-principle'), link: '/concepts/complementarity-principle' },
        ]
      },
      {
        text: '阶段三：数学框架',
        collapsed: false,
        items: [
          { text: getTitle('concepts', 'hilbert-space'), link: '/concepts/hilbert-space' },
          { text: getTitle('concepts', 'quantum-state'), link: '/concepts/quantum-state' },
          { text: getTitle('concepts', 'wave-function'), link: '/concepts/wave-function' },
          { text: getTitle('concepts', 'born-rule'), link: '/concepts/born-rule' },
          { text: getTitle('concepts', 'density-matrix'), link: '/concepts/density-matrix' },
          { text: getTitle('concepts', 'operator-theory'), link: '/concepts/operator-theory' },
          { text: getTitle('concepts', 'observables'), link: '/concepts/observables' },
          { text: getTitle('concepts', 'commutator'), link: '/concepts/commutator' },
        ]
      },
      {
        text: '阶段四：核心原理揭秘',
        collapsed: false,
        items: [
          { text: getTitle('concepts', 'uncertainty-principle'), link: '/concepts/uncertainty-principle' },
          { text: getTitle('concepts', 'quantum-superposition'), link: '/concepts/quantum-superposition' },
          { text: getTitle('concepts', 'wave-function-collapse'), link: '/concepts/wave-function-collapse' },
          { text: getTitle('concepts', 'quantum-entanglement'), link: '/concepts/quantum-entanglement' },
          { text: getTitle('concepts', 'decoherence'), link: '/concepts/decoherence' },
          { text: getTitle('concepts', 'bell-theorem'), link: '/concepts/bell-theorem' },
          { text: getTitle('concepts', 'spin'), link: '/concepts/spin' },
        ]
      },
      {
        text: '阶段五：动力学与近似方法',
        collapsed: false,
        items: [
          { text: getTitle('concepts', 'schrodinger-equation'), link: '/concepts/schrodinger-equation' },
          { text: getTitle('concepts', 'hamiltonian'), link: '/concepts/hamiltonian' },
          { text: getTitle('concepts', 'time-evolution'), link: '/concepts/time-evolution' },
          { text: getTitle('concepts', 'perturbation-theory'), link: '/concepts/perturbation-theory' },
        ]
      },
    ]
  } else if (c.dir === 'people') {
    sidebar[`/${c.dir}/`] = [
      { text: '量子先驱', link: '/people/' },
      {
        text: '量子力学奠基人（国际）',
        collapsed: false,
        items: [
          { text: getTitle('people', 'max-planck'), link: '/people/max-planck' },
          { text: getTitle('people', 'albert-einstein'), link: '/people/albert-einstein' },
          { text: getTitle('people', 'niels-bohr'), link: '/people/niels-bohr' },
          { text: getTitle('people', 'louis-de-broglie'), link: '/people/louis-de-broglie' },
          { text: getTitle('people', 'werner-heisenberg'), link: '/people/werner-heisenberg' },
          { text: getTitle('people', 'erwin-schrodinger'), link: '/people/erwin-schrodinger' },
          { text: getTitle('people', 'max-born'), link: '/people/max-born' },
          { text: getTitle('people', 'paul-dirac'), link: '/people/paul-dirac' },
        ]
      },
      {
        text: '实验与统计先驱',
        collapsed: false,
        items: [
          { text: getTitle('people', 'ernest-rutherford'), link: '/people/ernest-rutherford' },
          { text: getTitle('people', 'gustav-kirchhoff'), link: '/people/gustav-kirchhoff' },
          { text: getTitle('people', 'ludwig-boltzmann'), link: '/people/ludwig-boltzmann' },
        ]
      },
      {
        text: '数学形式化与现代理论',
        collapsed: false,
        items: [
          { text: getTitle('people', 'john-von-neumann'), link: '/people/john-von-neumann' },
          { text: getTitle('people', 'john-bell'), link: '/people/john-bell' },
        ]
      },
      {
        text: '中国量子科学家',
        collapsed: false,
        items: [
          { text: getTitle('people', 'pan-jianwei'), link: '/people/pan-jianwei' },
          { text: getTitle('people', 'guo-guangcan'), link: '/people/guo-guangcan' },
        ]
      },
    ]
  } else if (c.dir === 'experiments') {
    sidebar[`/${c.dir}/`] = [
      { text: '著名实验', link: '/experiments/' },
      {
        text: '波粒二象性验证',
        collapsed: false,
        items: [
          { text: getTitle('experiments', 'double-slit-experiment'), link: '/experiments/double-slit-experiment' },
          { text: getTitle('experiments', 'photoelectric-effect-exp'), link: '/experiments/photoelectric-effect-exp' },
          { text: getTitle('experiments', 'compton-scattering'), link: '/experiments/compton-scattering' },
          { text: getTitle('experiments', 'davisson-germer'), link: '/experiments/davisson-germer' },
        ]
      },
      {
        text: '量子化与原子结构',
        collapsed: false,
        items: [
          { text: getTitle('experiments', 'franck-hertz-experiment'), link: '/experiments/franck-hertz-experiment' },
          { text: getTitle('experiments', 'stern-gerlach-experiment'), link: '/experiments/stern-gerlach-experiment' },
        ]
      },
      {
        text: '纠缠与非局域性',
        collapsed: false,
        items: [
          { text: getTitle('experiments', 'aspect-test'), link: '/experiments/aspect-test' },
          { text: getTitle('experiments', 'epr-paradox'), link: '/experiments/epr-paradox' },
        ]
      },
      {
        text: '思想实验',
        collapsed: false,
        items: [
          { text: getTitle('experiments', 'schrodingers-cat'), link: '/experiments/schrodingers-cat' },
          { text: getTitle('experiments', 'photon-box'), link: '/experiments/photon-box' },
        ]
      },
    ]
  } else if (c.dir === 'interpretations') {
    sidebar[`/${c.dir}/`] = [
      { text: '量子力学诠释', link: '/interpretations/' },
      {
        text: '问题框架与传统诠释',
        collapsed: false,
        items: [
          { text: getTitle('interpretations', 'measurement-problem'), link: '/interpretations/measurement-problem' },
          { text: getTitle('interpretations', 'copenhagen-interpretation'), link: '/interpretations/copenhagen-interpretation' },
          { text: getTitle('interpretations', 'decoherence-interpretation'), link: '/interpretations/decoherence-interpretation' },
        ]
      },
      {
        text: '实在论与动力学路线',
        collapsed: false,
        items: [
          { text: getTitle('interpretations', 'many-worlds-interpretation'), link: '/interpretations/many-worlds-interpretation' },
          { text: getTitle('interpretations', 'pilot-wave-theory'), link: '/interpretations/pilot-wave-theory' },
          { text: getTitle('interpretations', 'objective-collapse-theories'), link: '/interpretations/objective-collapse-theories' },
        ]
      },
      {
        text: '历史、关系与信息路线',
        collapsed: false,
        items: [
          { text: getTitle('interpretations', 'consistent-histories'), link: '/interpretations/consistent-histories' },
          { text: getTitle('interpretations', 'relational-quantum-mechanics'), link: '/interpretations/relational-quantum-mechanics' },
          { text: getTitle('interpretations', 'qbism'), link: '/interpretations/qbism' },
        ]
      },
    ]
  } else if (c.dir === 'history') {
    sidebar[`/${c.dir}/`] = [
      { text: '历史事件', link: '/history/' },
      {
        text: '经典物理危机（19 世纪末—20 世纪初）',
        collapsed: false,
        items: [
          { text: getTitle('history', 'classical-physics-crisis'), link: '/history/classical-physics-crisis' },
          { text: getTitle('history', 'atomic-stability-problem'), link: '/history/atomic-stability-problem' },
          { text: getTitle('history', '1900-planck-quantum-hypothesis'), link: '/history/1900-planck-quantum-hypothesis' },
          { text: getTitle('history', '1905-einstein-miracle-year'), link: '/history/1905-einstein-miracle-year' },
        ]
      },
      {
        text: '旧量子论（1913—1924）',
        collapsed: false,
        items: [
          { text: getTitle('history', '1913-bohr-atomic-model'), link: '/history/1913-bohr-atomic-model' },
          { text: getTitle('history', '1924-de-broglie-matter-wave'), link: '/history/1924-de-broglie-matter-wave' },
        ]
      },
      {
        text: '量子力学建立（1925—1927）',
        collapsed: false,
        items: [
          { text: getTitle('history', '1925-heisenberg-matrix-mechanics'), link: '/history/1925-heisenberg-matrix-mechanics' },
          { text: getTitle('history', '1926-schrodinger-wave-mechanics'), link: '/history/1926-schrodinger-wave-mechanics' },
          { text: getTitle('history', '1926-born-probability-interpretation'), link: '/history/1926-born-probability-interpretation' },
          { text: getTitle('history', '1927-uncertainty-principle'), link: '/history/1927-uncertainty-principle' },
          { text: getTitle('history', '1927-fifth-solvay-conference'), link: '/history/1927-fifth-solvay-conference' },
          { text: getTitle('history', '1927-solvay-conference'), link: '/history/1927-solvay-conference' },
          { text: getTitle('history', 'solvay-conference'), link: '/history/solvay-conference' },
        ]
      },
      {
        text: '形式化与基础争论（1930—1935）',
        collapsed: false,
        items: [
          { text: getTitle('history', '1930-dirac-principles-of-quantum-mechanics'), link: '/history/1930-dirac-principles-of-quantum-mechanics' },
          { text: getTitle('history', '1932-von-neumann-mathematical-foundations'), link: '/history/1932-von-neumann-mathematical-foundations' },
          { text: getTitle('history', 'einstein-bohr-debate'), link: '/history/einstein-bohr-debate' },
          { text: getTitle('history', '1935-epr-paradox-paper'), link: '/history/1935-epr-paradox-paper' },
        ]
      },
      {
        text: '现代量子基础（1964—1982）',
        collapsed: false,
        items: [
          { text: getTitle('history', '1964-bell-theorem'), link: '/history/1964-bell-theorem' },
          { text: getTitle('history', '1982-aspect-experiment'), link: '/history/1982-aspect-experiment' },
        ]
      },
    ]
  } else if (c.dir === 'comparisons') {
    sidebar[`/${c.dir}/`] = [
      { text: '对比分析', link: '/comparisons/' },
      {
        text: '优先误区辨析',
        collapsed: false,
        items: [
          { text: getTitle('comparisons', 'decoherence-vs-collapse'), link: '/comparisons/decoherence-vs-collapse' },
          { text: getTitle('comparisons', 'classical-vs-quantum-probability'), link: '/comparisons/classical-vs-quantum-probability' },
          { text: getTitle('comparisons', 'entanglement-vs-correlation'), link: '/comparisons/entanglement-vs-correlation' },
        ]
      },
      {
        text: '诠释与哲学分歧',
        collapsed: false,
        items: [
          { text: getTitle('comparisons', 'copenhagen-vs-many-worlds'), link: '/comparisons/copenhagen-vs-many-worlds' },
          { text: getTitle('comparisons', 'quantum-interpretations-comparison'), link: '/comparisons/quantum-interpretations-comparison' },
          { text: getTitle('comparisons', 'einstein-vs-bohr'), link: '/comparisons/einstein-vs-bohr' },
        ]
      },
      {
        text: '理论形式与计算技术',
        collapsed: false,
        items: [
          { text: getTitle('comparisons', 'matrix-mechanics-vs-wave-mechanics'), link: '/comparisons/matrix-mechanics-vs-wave-mechanics' },
          { text: getTitle('comparisons', 'quantum-computing-vs-classical-computing'), link: '/comparisons/quantum-computing-vs-classical-computing' },
          { text: getTitle('comparisons', 'qkd-vs-post-quantum-cryptography'), link: '/comparisons/qkd-vs-post-quantum-cryptography' },
        ]
      },
    ]
  } else if (c.dir === 'applications') {
    sidebar[`/${c.dir}/`] = [
      { text: '应用与前沿', link: '/applications/' },
      {
        text: '量子计算路线图',
        collapsed: false,
        items: [
          { text: getTitle('applications', 'quantum-computing'), link: '/applications/quantum-computing' },
          { text: getTitle('applications', 'nisq-era'), link: '/applications/nisq-era' },
          { text: getTitle('applications', 'quantum-error-correction'), link: '/applications/quantum-error-correction' },
          { text: getTitle('applications', 'shor-algorithm'), link: '/applications/shor-algorithm' },
          { text: getTitle('applications', 'grover-algorithm'), link: '/applications/grover-algorithm' },
          { text: getTitle('applications', 'zuchongzhi-quantum-computer'), link: '/applications/zuchongzhi-quantum-computer' },
          { text: getTitle('applications', 'jiuzhang-photonic-computer'), link: '/applications/jiuzhang-photonic-computer' },
        ]
      },
      {
        text: '量子通信与安全路线图',
        collapsed: false,
        items: [
          { text: getTitle('applications', 'quantum-communication'), link: '/applications/quantum-communication' },
          { text: getTitle('applications', 'quantum-cryptography'), link: '/applications/quantum-cryptography' },
          { text: getTitle('applications', 'bb84-protocol'), link: '/applications/bb84-protocol' },
          { text: getTitle('applications', 'e91-protocol'), link: '/applications/e91-protocol' },
          { text: getTitle('applications', 'quantum-repeater'), link: '/applications/quantum-repeater' },
          { text: getTitle('applications', 'device-independent-qkd'), link: '/applications/device-independent-qkd' },
          { text: getTitle('applications', 'micius-satellite'), link: '/applications/micius-satellite' },
        ]
      },
      {
        text: '量子传感路线图',
        collapsed: false,
        items: [
          { text: getTitle('applications', 'quantum-sensing'), link: '/applications/quantum-sensing' },
          { text: getTitle('applications', 'nv-center'), link: '/applications/nv-center' },
          { text: getTitle('applications', 'squid'), link: '/applications/squid' },
          { text: getTitle('applications', 'atom-interferometer'), link: '/applications/atom-interferometer' },
          { text: getTitle('applications', 'standard-quantum-limit'), link: '/applications/standard-quantum-limit' },
        ]
      },
    ]
  } else {
    sidebar[`/${c.dir}/`] = buildSidebar(c.dir, c.label)
  }
}

// ============================================
// Wikilinks 映射构建
// ============================================
function buildSlugMap() {
  const slugMap = new Map()
  for (const c of categories) {
    const dirPath = join(PROJECT_DIR, c.dir)
    if (!existsSync(dirPath)) continue

    // 当前目录的 .md 文件
    const files = getMdFiles(c.dir)
    for (const f of files) {
      if (f === 'index') continue
      if (!slugMap.has(f)) {
        slugMap.set(f, `/${c.dir}/${f}`)
      }
    }

    // 子目录
    const subdirs = getSubdirs(c.dir)
    for (const sub of subdirs) {
      const subFiles = getMdFiles(`${c.dir}/${sub}`)
      for (const f of subFiles) {
        if (f === 'index') continue
        if (!slugMap.has(f)) {
          slugMap.set(f, `/${c.dir}/${sub}/${f}`)
        }
      }
    }
  }
  return slugMap
}

const slugMap = buildSlugMap()

// ============================================
// VitePress 配置
// ============================================
export default defineConfig({
  title: 'QMKB — 量子力学知识库',
  description: '为量子力学科普自媒体提供严谨、体系化的知识基础',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3b82f6' }],
    // 强制覆盖内容宽度 — 确保在所有情况下都能生效
    ['style', {}, `
      html body .VPDoc.has-aside .content-container,
      html body .VPDoc .content-container,
      html body .VPDoc.has-aside .content,
      html body .VPDoc .content {
        max-width: 1120px !important;
        width: 100% !important;
      }
    `],
  ],

  themeConfig: {
    logo: '/logo.svg',
    nav,
    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/qmkb' },
    ],

    footer: {
      message: '以权威来源为基础，严肃、准确的量子力学知识库',
      copyright: '© 2026 QMKB 量子力学知识库',
    },

    search: {
      provider: 'local',
    },

    // editLink 已移除 — 不需要"在 GitHub 上编辑此页面"
  },

  markdown: {
    math: true,
    config: (md) => {
      // 自定义 markdown-it 插件：支持 [[wikilinks]] 语法
      md.inline.ruler.before('link', 'wikilink', function wikilink(state, silent) {
        const start = state.pos
        const max = state.posMax

        if (start + 2 > max) return false
        if (state.src.charCodeAt(start) !== 0x5B /* [ */) return false
        if (state.src.charCodeAt(start + 1) !== 0x5B /* [ */) return false

        // 匹配 [[slug]] 或 [[slug|title]]
        const match = /^\[\[([^|\]\n]+)(?:\|([^\]\n]+))?\]\]/.exec(state.src.slice(start))
        if (!match) return false

        if (!silent) {
          const slug = match[1].trim()
          const title = match[2] ? match[2].trim() : slug
          const href = slugMap.get(slug) || `/${slug}`

          const tokenOpen = state.push('link_open', 'a', 1)
          tokenOpen.attrs = [['href', href]]

          const tokenText = state.push('text', '', 0)
          tokenText.content = title

          state.push('link_close', 'a', -1)
        }

        state.pos += match[0].length
        return true
      })
    },
  },
})
