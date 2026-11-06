#!/usr/bin/env node
/**
 * QMKB Lint Script
 * Validates wiki pages against SCHEMA.md rules (llm-wiki conventions)
 */

const fs = require('fs');
const path = require('path');

const PROJECT_DIR = '/home/ec2-user/.hermes/profiles/qm/home/qmkb';
const SCHEMA_PATH = path.join(PROJECT_DIR, 'SCHEMA.md');

// Valid types from SCHEMA.md
const VALID_TYPES = new Set([
  'entity', 'concept', 'comparison', 'query', 'history',
  'experiment', 'interpretation', 'application', 'resource',
  'stub', 'person', 'index'  // index = 分类索引页
]);

// Valid tags from SCHEMA.md taxonomy
const VALID_TAGS = new Set([
  // 理论分支
  'foundations', 'wave-particle-duality', 'uncertainty-principle',
  'superposition', 'entanglement', 'decoherence', 'measurement',
  'relativistic-qm', 'qft',
  // 历史与人物
  'history', 'person', 'institution', 'solvay-conference',
  // 实验
  'experiment', 'thought-experiment', 'bell-test',
  // 诠释与哲学
  'copenhagen', 'many-worlds', 'pilot-wave', 'quantum-logic', 'philosophy',
  'interpretations',
  // 应用与技术
  'quantum-computing', 'quantum-communication', 'quantum-sensing',
  'quantum-cryptography', 'china-quantum',
  // 数学工具
  'linear-algebra', 'hilbert-space', 'operator-theory', 'group-theory',
  // 元数据
  'book', 'paper', 'course', 'video', 'tool',
  // 通用标签
  'comparison', 'misconception', 'analogy', 'visualization',
  'beginner', 'advanced',
  // 补充标签（实际页面中使用的）
  'matrix-mechanics', 'wave-mechanics', 'quantization', 'atom', 'energy-levels',
  'spin', 'matter-wave', 'uncertainty', 'schrodinger', 'founders',
  'nobel-laureate', 'heisenberg', 'bell-theorem', 'hydrogen-atom',
  'photonics', 'superconducting', 'nonlocality', 'wave-function',
  'hamiltonian', 'quantum-dynamics', 'probability', 'density-matrix', 'perturbation-theory',
  // 实践中常用
  'stub', 'resource', 'index',
  // 应用与技术
  'application', 'qubit', 'algorithm', 'qkd', 'security', 'satellite',
  'metrology', 'interferometry', 'gravity', 'magnetometry',
  'teleportation', 'bb84', 'post-quantum',
  // 诠释与哲学
  'interpretation', 'environment', 'pointer-states', 'einselection',
  'complementarity', 'bohr', 'everett', 'von-neumann', 'wigner',
  'hidden-variables', 'de-broglie', 'bohm', 'determinism',
  'objective-collapse', 'consistent-histories', 'relational', 'qbism',
]);

// Valid status values
const VALID_STATUS = new Set(['draft', 'stub', 'complete', 'review-needed']);

// Confidence values
const VALID_CONFIDENCE = new Set(['high', 'medium', 'low']);

// Difficulty values
const VALID_DIFFICULTY = new Set(['beginner', 'intermediate', 'advanced']);

const issues = {
  error: [],
  warning: [],
  info: []
};

function addIssue(severity, message, file = '') {
  const prefix = file ? `[${file}] ` : '';
  issues[severity].push(`${prefix}${message}`);
}

function parseFrontmatter(content) {
  if (!content.startsWith('---')) return null;
  const end = content.indexOf('---', 3);
  if (end === -1) return null;
  const fmText = content.slice(3, end).trim();
  const fm = {};
  let currentKey = null;
  let currentArray = null;

  for (const line of fmText.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    // Array item
    if (trimmed.startsWith('- ')) {
      if (currentArray !== null) {
        currentArray.push(trimmed.slice(2).trim());
      }
      continue;
    }

    // Key: value
    const match = trimmed.match(/^(\w+):\s*(.*)$/);
    if (match) {
      const [, key, val] = match;
      currentKey = key;
      if (val.startsWith('[') && val.endsWith(']')) {
        // Inline array
        fm[key] = val.slice(1, -1).split(',').map(s => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
        currentArray = null;
      } else if (val === '') {
        // Multi-line array might follow
        fm[key] = [];
        currentArray = fm[key];
      } else {
        fm[key] = val.replace(/^["']|["']$/g, '');
        currentArray = null;
      }
    }
  }
  return fm;
}

function extractWikilinks(content) {
  const links = [];
  const regex = /\[\[([^\]]+)\]\]/g;
  let m;
  while ((m = regex.exec(content)) !== null) {
    // Strip anchor and display text (pipe syntax: [[target|display]])
    links.push(m[1].split('#')[0].split('|')[0].trim());
  }
  return links;
}

function extractMarkdownLinks(content) {
  const links = [];
  // [text](path) links
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let m;
  while ((m = regex.exec(content)) !== null) {
    const target = m[2].split('#')[0].trim();
    if (!target.startsWith('http') && !target.startsWith('mailto:')) {
      links.push(target);
    }
  }
  return links;
}

function main() {
  console.log('\n========================================');
  console.log('  QMKB Lint Report');
  console.log('========================================\n');

  // Collect all wiki pages
  const wikiDirs = ['applications', 'comparisons', 'concepts', 'entities',
    'experiments', 'history', 'interpretations', 'people', 'queries', 'resources'];

  const pages = {}; // slug -> { path, content, frontmatter, lines }
  const allFiles = [];

  for (const dir of wikiDirs) {
    const dirPath = path.join(PROJECT_DIR, dir);
    if (!fs.existsSync(dirPath)) continue;
    const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));
    for (const f of files) {
      const filePath = path.join(dirPath, f);
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n').length;
      const slug = path.join(dir, f.replace(/\.md$/, ''));
      const fm = parseFrontmatter(content);
      pages[slug] = { path: filePath, content, frontmatter: fm, lines, slug };
      allFiles.push(slug);
    }
  }

  // Also check root-level pages (index.md, log.md, README.md, SCHEMA.md)
  const rootFiles = ['index.md', 'log.md', 'README.md', 'SCHEMA.md'];
  for (const f of rootFiles) {
    const filePath = path.join(PROJECT_DIR, f);
    if (!fs.existsSync(filePath)) continue;
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n').length;
    const slug = f.replace(/\.md$/, '');
    pages[slug] = { path: filePath, content, frontmatter: parseFrontmatter(content), lines, slug };
  }

  // ============================================
  // 1. Frontmatter validation for wiki pages
  // ============================================
  const wikiPageDirs = ['applications', 'comparisons', 'concepts', 'entities',
    'experiments', 'history', 'interpretations', 'people', 'queries', 'resources'];

  for (const slug in pages) {
    const page = pages[slug];
    const dir = slug.split('/')[0];
    if (!wikiPageDirs.includes(dir)) continue;

    // Must have frontmatter
    if (!page.frontmatter) {
      addIssue('error', 'Missing YAML frontmatter', slug);
      continue;
    }

    const fm = page.frontmatter;

    // Required fields
    const required = ['title', 'created', 'updated', 'type', 'tags'];
    for (const field of required) {
      if (!(field in fm) || fm[field] === '' || (Array.isArray(fm[field]) && fm[field].length === 0)) {
        addIssue('error', `Missing or empty required frontmatter field: ${field}`, slug);
      }
    }

    // Type validation
    if (fm.type && !VALID_TYPES.has(fm.type)) {
      addIssue('error', `Invalid type "${fm.type}". Must be one of: ${[...VALID_TYPES].join(', ')}`, slug);
    }

    // Status validation
    if (fm.status && !VALID_STATUS.has(fm.status)) {
      addIssue('warning', `Invalid status "${fm.status}". Must be one of: ${[...VALID_STATUS].join(', ')}`, slug);
    }

    // Confidence validation
    if (fm.confidence && !VALID_CONFIDENCE.has(fm.confidence)) {
      addIssue('warning', `Invalid confidence "${fm.confidence}". Must be one of: ${[...VALID_CONFIDENCE].join(', ')}`, slug);
    }

    // Difficulty validation
    if (fm.difficulty && !VALID_DIFFICULTY.has(fm.difficulty)) {
      addIssue('warning', `Invalid difficulty "${fm.difficulty}". Must be one of: ${[...VALID_DIFFICULTY].join(', ')}`, slug);
    }

    // Tags validation
    if (Array.isArray(fm.tags)) {
      for (const tag of fm.tags) {
        if (!VALID_TAGS.has(tag)) {
          addIssue('warning', `Unknown tag "${tag}". Add to SCHEMA.md taxonomy first.`, slug);
        }
      }
    }

    // Date format validation (YYYY-MM-DD)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (fm.created && !dateRegex.test(fm.created)) {
      addIssue('error', `Invalid created date format: "${fm.created}". Use YYYY-MM-DD.`, slug);
    }
    if (fm.updated && !dateRegex.test(fm.updated)) {
      addIssue('error', `Invalid updated date format: "${fm.updated}". Use YYYY-MM-DD.`, slug);
    }
  }

  // ============================================
  // 2. Orphan pages (no inbound wikilinks)
  // ============================================
  const inboundLinks = {};
  for (const slug in pages) {
    inboundLinks[slug] = new Set();
  }

  for (const slug in pages) {
    const page = pages[slug];
    const wikilinks = extractWikilinks(page.content);
    const mdLinks = extractMarkdownLinks(page.content);

    for (const link of wikilinks) {
      let target = link;
      // If link starts with a wiki dir name, treat as absolute path
      const firstSeg = target.split('/')[0];
      if (!target.includes('/')) {
        // Simple name like "max-planck" — try to find in any dir
        const matches = allFiles.filter(s => s.endsWith('/' + target) || s === target);
        for (const m of matches) {
          inboundLinks[m].add(slug);
        }
      } else if (wikiPageDirs.includes(firstSeg)) {
        // Absolute path like "people/max-planck"
        if (pages[target]) {
          inboundLinks[target].add(slug);
        }
      } else {
        // Relative path like "../people/max-planck"
        const baseDir = path.dirname(slug);
        const resolved = path.posix.normalize(path.posix.join(baseDir, target));
        if (pages[resolved]) {
          inboundLinks[resolved].add(slug);
        }
      }
    }

    for (const link of mdLinks) {
      let target = link.replace(/\.md$/, '');
      const baseDir = path.dirname(slug);
      const resolved = path.posix.normalize(path.posix.join(baseDir, target));
      if (pages[resolved]) {
        inboundLinks[resolved].add(slug);
      }
    }
  }

  for (const slug in inboundLinks) {
    const dir = slug.split('/')[0];
    if (!wikiPageDirs.includes(dir)) continue; // Only check wiki pages
    // Skip index/category pages — they are entry points, not expected to be linked
    const pageType = pages[slug]?.frontmatter?.type;
    if (pageType === 'index') continue;
    if (inboundLinks[slug].size === 0) {
      addIssue('warning', `Orphan page: no inbound wikilinks from other pages`, slug);
    }
  }

  // ============================================
  // 3. Broken wikilinks
  // ============================================
  for (const slug in pages) {
    const page = pages[slug];
    const wikilinks = extractWikilinks(page.content);

    for (const link of wikilinks) {
      if (link.includes('/')) {
        const firstSeg = link.split('/')[0];
        let resolved;
        if (wikiPageDirs.includes(firstSeg)) {
          // Absolute path like "people/max-planck"
          resolved = link;
        } else {
          // Relative path
          const baseDir = path.dirname(slug);
          resolved = path.posix.normalize(path.posix.join(baseDir, link));
        }
        if (!pages[resolved]) {
          addIssue('warning', `Broken wikilink: [[${link}]] -> "${resolved}" not found`, slug);
        }
      } else {
        // Simple name — check if any page matches
        const matches = allFiles.filter(s => s.endsWith('/' + link) || s === link);
        if (matches.length === 0) {
          addIssue('warning', `Broken wikilink: [[${link}]] not found in any directory`, slug);
        }
      }
    }
  }

  // ============================================
  // 4. Page size check (>200 lines)
  // ============================================
  for (const slug in pages) {
    const dir = slug.split('/')[0];
    if (!wikiPageDirs.includes(dir)) continue;
    if (pages[slug].lines > 200) {
      addIssue('info', `Page is ${pages[slug].lines} lines (>200). Consider splitting into sub-topics.`, slug);
    }
  }

  // ============================================
  // 5. index.md completeness check
  // ============================================
  // NOTE: index.md is the VitePress homepage (hero + intro), not a global directory index.
  // Navigation is handled by sidebar config, not manual listing in index.md.
  // Skip the "all pages must be referenced in index.md" check.
  /*
  if (pages['index']) {
    const indexContent = pages['index'].content;
    for (const slug in pages) {
      const dir = slug.split('/')[0];
      if (!wikiPageDirs.includes(dir)) continue;
      if (!indexContent.includes(pageName) && !indexContent.includes(slug)) {
        addIssue('warning', `Page "${slug}" not referenced in index.md`, 'index');
      }
    }
  }
  */

  // ============================================
  // 6. log.md rotation check (>500 entries)
  // ============================================
  if (pages['log']) {
    const logEntries = (pages['log'].content.match(/^##\s*\[/gm) || []).length;
    if (logEntries > 500) {
      addIssue('warning', `log.md has ${logEntries} entries (>500). Consider rotating to log-YYYY.md.`, 'log');
    }
  }

  // ============================================
  // Report
  // ============================================
  const total = issues.error.length + issues.warning.length + issues.info.length;

  if (total === 0) {
    console.log('✅ All checks passed! No issues found.\n');
    process.exit(0);
  }

  if (issues.error.length > 0) {
    console.log(`❌ ERRORS (${issues.error.length}):`);
    issues.error.forEach(e => console.log(`  - ${e}`));
    console.log('');
  }

  if (issues.warning.length > 0) {
    console.log(`⚠️  WARNINGS (${issues.warning.length}):`);
    issues.warning.forEach(e => console.log(`  - ${e}`));
    console.log('');
  }

  if (issues.info.length > 0) {
    console.log(`ℹ️  INFO (${issues.info.length}):`);
    issues.info.forEach(e => console.log(`  - ${e}`));
    console.log('');
  }

  console.log('========================================');
  console.log(`Total: ${issues.error.length} errors, ${issues.warning.length} warnings, ${issues.info.length} info`);
  console.log('========================================\n');

  process.exit(issues.error.length > 0 ? 1 : 0);
}

main();
