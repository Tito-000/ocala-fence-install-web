#!/usr/bin/env node
/**
 * Convert all JPG/JPEG/PNG images in public/images to WebP.
 * Keeps originals as fallback. Run once: `node scripts/convert-to-webp.mjs`
 */
import { readdir, stat } from 'node:fs/promises';
import { join, relative, parse } from 'node:path';
import { existsSync } from 'node:fs';
import sharp from 'sharp';

const ROOT = new URL('../public/images', import.meta.url).pathname;
const QUALITY = 82;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else if (/\.(jpe?g|png)$/i.test(entry.name)) yield path;
  }
}

let saved = 0;
let totalOrig = 0;
let totalNew = 0;
let count = 0;

for await (const src of walk(ROOT)) {
  const { dir, name } = parse(src);
  const dest = join(dir, `${name}.webp`);
  if (existsSync(dest)) continue; // skip if WebP already exists

  const origStat = await stat(src);
  const origKb = origStat.size / 1024;
  totalOrig += origKb;

  await sharp(src).webp({ quality: QUALITY }).toFile(dest);

  const newStat = await stat(dest);
  const newKb = newStat.size / 1024;
  totalNew += newKb;
  saved += origKb - newKb;
  count++;

  const reduction = Math.round(((origKb - newKb) / origKb) * 100);
  console.log(`✓ ${relative(ROOT, src)} — ${origKb.toFixed(0)}KB → ${newKb.toFixed(0)}KB (-${reduction}%)`);
}

console.log(`\n${count} images converted`);
console.log(`Total saved: ${saved.toFixed(0)} KB (${((saved / totalOrig) * 100).toFixed(0)}% smaller)`);
console.log(`Original total: ${(totalOrig / 1024).toFixed(1)} MB`);
console.log(`WebP total: ${(totalNew / 1024).toFixed(1)} MB`);
