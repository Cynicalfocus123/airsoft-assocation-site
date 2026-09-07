import fs from 'node:fs/promises';
import path from 'node:path';
import { deflateRawSync } from 'node:zlib';
const root = path.resolve(import.meta.dirname, '..');
const folder = path.join(root, 'public_html');
// Standard ZIP32, UTF-8 filenames, maximum DEFLATE. Files extract directly into public_html.
const table = Array.from({ length: 256 }, (_, n) => {
  for (let k = 0; k < 8; k++) n = n & 1 ? 0xedb88320 ^ (n >>> 1) : n >>> 1;
  return n >>> 0;
});
function crc32(data) { let c = 0xffffffff; for (const b of data) c = table[(c ^ b) & 255] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; }
async function walk(dir) {
  const result = [];
  for (const item of (await fs.readdir(dir, { withFileTypes: true })).sort((a,b) => a.name.localeCompare(b.name))) {
    const file = path.join(dir, item.name);
    if (item.isDirectory()) result.push(...await walk(file)); else result.push(file);
  }
  return result;
}
const local = [], central = []; let offset = 0;
for (const file of await walk(folder)) {
  const name = Buffer.from(path.relative(folder, file).replaceAll('\\', '/'));
  const data = await fs.readFile(file), compressed = deflateRawSync(data, { level: 9 }), crc = crc32(data);
  const header = Buffer.alloc(30);
  header.writeUInt32LE(0x04034b50); header.writeUInt16LE(20, 4); header.writeUInt16LE(0x800, 6);
  header.writeUInt16LE(8, 8); header.writeUInt16LE(33, 12); header.writeUInt32LE(crc, 14);
  header.writeUInt32LE(compressed.length, 18); header.writeUInt32LE(data.length, 22); header.writeUInt16LE(name.length, 26);
  const entry = Buffer.alloc(46);
  entry.writeUInt32LE(0x02014b50); entry.writeUInt16LE(20, 4); header.copy(entry, 6, 4, 30);
  entry.writeUInt32LE(offset, 42);
  local.push(header, name, compressed); central.push(entry, name);
  offset += header.length + name.length + compressed.length;
}
const directory = Buffer.concat(central), end = Buffer.alloc(22);
end.writeUInt32LE(0x06054b50); end.writeUInt16LE(central.length / 2, 8); end.writeUInt16LE(central.length / 2, 10);
end.writeUInt32LE(directory.length, 12); end.writeUInt32LE(offset, 16);
await fs.writeFile(path.join(root, 'public_html.zip'), Buffer.concat([...local, directory, end]));
console.log(`public_html.zip: ${offset + directory.length + end.length} bytes; ${central.length / 2} files at archive root.`);
