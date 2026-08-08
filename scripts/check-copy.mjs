// Blocks the production build while placeholder copy is still in the source.
//
// Placeholders are written as double-bracket PH markers in docs/copy.md and
// docs/copy-legal.md. Those doc files are the drafting surface and are meant to
// contain them, so only src/ is scanned here.
//
// This replaces a POSIX shell one-liner. npm's default script-shell on Windows
// is cmd.exe, which doesn't understand `!` negation or `\n` escapes, so the
// original grep pipeline exited 0 no matter what and the guard never ran.

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

// Built from parts so this file never contains a literal marker and can't
// flag itself.
const MARKER = '[' + '[PH:';

// Only .astro is scanned. Markdown under src/ (if any) is content-in-progress,
// and the docs/ drafting files legitimately contain markers.
const EXTENSIONS = ['.astro'];

// Comment lines describing the marker are not placeholder copy.
const COMMENT = /^\s*(\/\/|\/\*|\*|<!--|#)/;

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      walk(full, files);
    } else if (EXTENSIONS.some((ext) => entry.endsWith(ext))) {
      files.push(full);
    }
  }
  return files;
}

const hits = [];

for (const file of walk('src')) {
  const lines = readFileSync(file, 'utf-8').split('\n');
  lines.forEach((line, i) => {
    if (line.includes(MARKER) && !COMMENT.test(line)) {
      hits.push({ file, line: i + 1, text: line.trim().slice(0, 100) });
    }
  });
}

if (hits.length > 0) {
  console.error('');
  console.error('PLACEHOLDER COPY FOUND — cannot ship');
  console.error('');
  for (const h of hits) {
    console.error(`  ${h.file}:${h.line}`);
    console.error(`    ${h.text}`);
  }
  console.error('');
  console.error(`${hits.length} placeholder${hits.length === 1 ? '' : 's'} must be replaced with real copy before deploying.`);
  console.error('');
  process.exit(1);
}

console.log(`Copy check passed — no placeholders in ${walk('src').length} source files.`);
