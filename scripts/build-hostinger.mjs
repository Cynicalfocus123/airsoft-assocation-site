import fs from 'node:fs/promises';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const root = path.resolve(import.meta.dirname, '..');
function run(args, env = process.env) {
  const result = spawnSync(process.execPath, args, { cwd: root, env, stdio: 'inherit' });
  if (result.status !== 0) throw Error(`Command failed: ${args[0]}`);
}
run(['scripts/verify-live-sync.mjs']);
if (!process.argv.includes('--package-only')) {
  run(['scripts/optimize-images.mjs']);
  run([require.resolve('next/dist/bin/next'), 'build'], { ...process.env, NEXT_PUBLIC_BASE_PATH: '' });
}
run(['scripts/normalize-export.mjs', 'out']);
const target = path.join(root, 'public_html');
// Only this fixed generated child of the repository may be replaced.
if (path.dirname(target) !== root || path.basename(target) !== 'public_html') throw Error('Unsafe output directory');
await fs.rm(target, { recursive: true, force: true });
await fs.cp(path.join(root, 'out'), target, { recursive: true, filter: (src) => {
  const relative = path.relative(path.join(root, 'out'), src).replaceAll('\\', '/');
  if (relative.endsWith('.map')) return false;
  if (/^(file|globe|next|vercel|window)\.svg$/.test(relative)) return false;
  if (relative.startsWith('images/') && relative !== 'images/association-logo.png' && relative !== 'images/optimized' && !relative.startsWith('images/optimized/')) return false;
  return true;
} });
await fs.copyFile(path.join(root, 'scripts/hostinger.htaccess'), path.join(target, '.htaccess'));
run(['scripts/audit-production.mjs']);
run(['scripts/zip-production.mjs']);
