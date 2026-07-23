// Builds the favicon and app icon set from the hound mark: a white
// glyph on a navy rounded tile, so the icon stays legible in dark
// browser tabs and at Google's ~18px search result size. Runs before
// every build; skips work if the outputs already exist.
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const pub = (f) => path.join(root, 'public', f);

const OUTPUTS = ['favicon.ico', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png'];
if (OUTPUTS.every((f) => existsSync(pub(f)))) {
  process.exit(0);
}

const NAVY = '#142937';
const whiteMark = readFileSync(path.join(root, 'public/logo-mark.svg'), 'utf8')
  .replaceAll('#142937', '#ffffff')
  .replaceAll('#142938', '#ffffff');

// size: canvas, radius: tile corner radius, markScale: glyph height share
async function tile(size, markScale = 0.62, radius = Math.round(size * 0.2)) {
  const markH = Math.round(size * markScale);
  const mark = await sharp(Buffer.from(whiteMark), { density: 300 })
    .resize({ height: markH })
    .png()
    .toBuffer();
  const meta = await sharp(mark).metadata();
  const bg = Buffer.from(
    `<svg width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${radius}" fill="${NAVY}"/></svg>`
  );
  return sharp(bg)
    .composite([
      {
        input: mark,
        left: Math.round((size - meta.width) / 2),
        top: Math.round((size - meta.height) / 2),
      },
    ])
    .png()
    .toBuffer();
}

await sharp(await tile(512)).toFile(pub('icon-512.png'));
await sharp(await tile(192)).toFile(pub('icon-192.png'));
// Apple applies its own corner mask, so the tile ships square.
await sharp(await tile(180, 0.62, 0)).toFile(pub('apple-touch-icon.png'));

// The .ico carries 16/32/48 so Google and legacy agents that blindly
// request /favicon.ico all get a real answer.
const icoSizes = await Promise.all(
  [16, 32, 48].map(async (s) => sharp(await tile(s, 0.68)).toBuffer())
);
writeFileSync(pub('favicon.ico'), await pngToIco(icoSizes));

console.log('icons generated:', OUTPUTS.join(', '));
