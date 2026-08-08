// Cross-platform replacement for the shell one-liner in docs/copy.md's build
// guard — npm's default script-shell is cmd.exe on Windows, which doesn't
// understand `!` or `\n`, so a POSIX grep pipeline silently fails there.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

function walk(dir, files = []) {
	for (const entry of readdirSync(dir)) {
		const full = join(dir, entry);
		if (statSync(full).isDirectory()) {
			walk(full, files);
		} else if (entry.endsWith('.astro') || entry.endsWith('.md')) {
			files.push(full);
		}
	}
	return files;
}

const targets = walk('src');

let found = false;
for (const file of targets) {
	const content = readFileSync(file, 'utf-8');
	if (content.includes('[[PH:')) {
		found = true;
		console.error(file);
	}
}

if (found) {
	console.error('\nPLACEHOLDER COPY FOUND — cannot ship\n');
	process.exit(1);
}
