// Builds the 1200x630 social share image from the stacked lockup.
// Runs before every build; skips work if the output already exists.
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const src = path.join(root, 'src/assets/HoundStackTextwLogo-trim.svg');
const out = path.join(root, 'public/og.png');

if (existsSync(out)) {
  process.exit(0);
}

const logo = await sharp(src, { density: 300 }).resize({ width: 560 }).png().toBuffer();
const logoMeta = await sharp(logo).metadata();

await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 4,
    background: { r: 255, g: 255, b: 255, alpha: 1 },
  },
})
  .composite([
    {
      input: logo,
      left: Math.round((1200 - logoMeta.width) / 2),
      top: Math.round((630 - logoMeta.height) / 2) - 20,
    },
    {
      input: Buffer.from(
        `<svg width="1200" height="630"><rect x="0" y="614" width="1200" height="16" fill="#142937"/><text x="600" y="${Math.round((630 + logoMeta.height) / 2) + 40}" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="30" fill="#48606f">Software for pet waste removal businesses</text></svg>`
      ),
      left: 0,
      top: 0,
    },
  ])
  .png()
  .toFile(out);

console.log('og.png generated');
