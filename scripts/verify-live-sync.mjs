import fs from 'node:fs/promises';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
const live = path.resolve(import.meta.dirname, '..');
if (path.basename(live) !== 'airsoft-assocation-site-live') throw Error('Create the Hostinger deployment from airsoft-assocation-site-live only. Synchronize source there first.');
const canonical = path.join(path.dirname(live), 'airsoft-assocation-site-git');
const files = [...new Set(execFileSync('git', ['-C', canonical, 'ls-files', '--cached', '--others', '--exclude-standard', '-z'], { encoding: 'utf8' }).split('\0').filter(Boolean))];
const mismatches = [];
for (const relative of files) {
  const source = path.resolve(canonical, relative), target = path.resolve(live, relative);
  if (!source.startsWith(canonical + path.sep) || !target.startsWith(live + path.sep)) throw Error('Unsafe source path');
  const [a, b] = await Promise.all([fs.readFile(source).catch(() => null), fs.readFile(target).catch(() => null)]);
  if (!a || !b || !a.equals(b)) mismatches.push(relative);
}
if (mismatches.length) throw Error(`ZIP blocked: live does not match current Git source. Run scripts/sync-live.ps1 from Git first. Mismatches: ${mismatches.join(', ')}`);
console.log(`Live source verified: ${files.length} code, asset, data and configuration files exactly match the current Git folder.`);
