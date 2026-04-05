import sharp from 'sharp'
import { readFileSync } from 'fs'

const svg = readFileSync('src/app/favicon.svg')

const sizes = [
  { size: 16,  name: 'favicon-16x16.png' },
  { size: 32,  name: 'favicon-32x32.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' },
]

for (const { size, name } of sizes) {
  await sharp(svg)
    .resize(size, size)
    .png()
    .toFile(`public/${name}`)
  console.log(`Generated public/${name}`)
}

await sharp(svg)
  .resize(32, 32)
  .png()
  .toFile('public/favicon-32.png')

console.log('All favicons generated.')
