import fs from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve(import.meta.dirname, '..');
const name = process.argv[2] ?? 'out';
if (!['out', 'public_html'].includes(name)) throw Error('Expected a generated export folder');
const folder = path.join(root, name);
let count = 0;
async function visit(dir) {
  for (const item of await fs.readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, item.name);
    if (item.isDirectory()) { await visit(file); if (!(await fs.readdir(file)).length) await fs.rmdir(file); continue; }
    const parts = path.relative(folder, file).split(path.sep);
    const start = parts.findIndex(p => p.startsWith('__next.'));
    if (start < 0 || start === parts.length - 1) continue;
    // Next's exporter uses platform path separators, but the browser's
    // convertSegmentPathToStaticExportFilename always requests dotted names.
    const target = path.join(folder, ...parts.slice(0, start), parts.slice(start).join('.'));
    if (!file.startsWith(folder + path.sep) || !target.startsWith(folder + path.sep)) throw Error('Unsafe export path');
    const data = await fs.readFile(file);
    const existing = await fs.readFile(target).catch(() => null);
    if (existing && !existing.equals(data)) throw Error(`Conflicting segment: ${target}`);
    await fs.writeFile(target, data); await fs.unlink(file); count++;
  }
}
await visit(folder);
console.log(`Normalized ${count} Next static navigation filenames in ${name}.`);
