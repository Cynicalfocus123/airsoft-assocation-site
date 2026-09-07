import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const sharp = require(require.resolve('sharp', { paths: [path.dirname(require.resolve('next/package.json'))] }));
const root = path.resolve(import.meta.dirname, '..');
const output = path.join(root, 'public/images/optimized');
await fs.mkdir(output, { recursive: true });
const manifest = {};
const report = [];
for (const name of (await fs.readdir(path.join(root, 'public/images'))).sort()) {
  if (!/\.(png|jpe?g|avif|webp)$/i.test(name)) continue;
  const input = path.join(root, 'public/images', name);
  const meta = await sharp(input).metadata();
  const logo = name === 'association-logo.png';
  const max = Math.min(meta.width, logo ? 384 : 2048);
  const widths = max > 1000 ? [768, max] : [max];
  const variants = [];
  for (const width of widths) {
    const pipeline = sharp(input).rotate().resize({ width, withoutEnlargement: true });
    const webp = await pipeline.clone().webp(logo ? { lossless: true, effort: 6 } : { quality: 88, effort: 6 }).toBuffer();
    const avif = logo ? null : await pipeline.clone().avif({ quality: 64, effort: 6, chromaSubsampling: '4:4:4' }).toBuffer();
    let format = avif && avif.length < webp.length * 0.85 ? 'avif' : 'webp';
    let buffer = format === 'avif' ? avif : webp;
    // Preserve already compact AVIFs at native size without generational loss.
    if (name.endsWith('.avif') && width === meta.width) {
      const original = await fs.readFile(input);
      if (!meta.exif && !meta.xmp && original.length <= buffer.length * 1.15) { buffer = original; format = 'avif'; }
    }
    const filename = `${path.parse(name).name}-${width}.${format}`;
    await fs.writeFile(path.join(output, filename), buffer);
    const decoded = await sharp(buffer).metadata();
    if (decoded.width !== width || !['webp', 'heif'].includes(decoded.format)) throw Error(`Invalid encoding: ${filename}`);
    variants.push({ src: `/images/optimized/${filename}`, width });
  }
  manifest[`/images/${path.parse(name).name}`] = variants;
  report.push({ original: name, before: (await fs.stat(input)).size, variants });
}
const used = new Set(Object.values(manifest).flat().map(v => path.basename(v.src)));
for (const file of await fs.readdir(output)) if (!used.has(file)) await fs.unlink(path.join(output, file));
await fs.writeFile(path.join(root, 'data/image-manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
await fs.mkdir(path.join(root, 'reports'), { recursive: true });
await fs.writeFile(path.join(root, 'reports/images.json'), JSON.stringify(report, null, 2));
console.log(`Optimized ${report.length} originals into ${used.size} responsive images; originals retained.`);
