const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

const imagesToProcess = [
  'first-hero.jpg',
  'first-01.jpg',
  'first-02.jpg',
  'first-03.jpg',
  'first-04.jpg',
  'first-05.jpg',
  'first-06.jpg',
]

const inputDir = path.join(
  __dirname, '../public/images/work'
)
const outputDir = path.join(
  __dirname, '../public/images/work'
)

async function blurRegion(inputPath, outputPath, regions) {
  const image = sharp(inputPath)
  const metadata = await image.metadata()
  const { width, height } = metadata

  let pipeline = sharp(inputPath)

  for (const region of regions) {
    const left = Math.round(region.x * width)
    const top  = Math.round(region.y * height)
    const w    = Math.round(region.w * width)
    const h    = Math.round(region.h * height)

    const blurredRegion = await sharp(inputPath)
      .extract({ left, top, width: w, height: h })
      .blur(20)
      .toBuffer()

    pipeline = pipeline.composite([{
      input: blurredRegion,
      left,
      top,
    }])
  }

  await pipeline.toFile(outputPath)
  console.log(`Processed: ${path.basename(outputPath)}`)
}

async function main() {
  for (const filename of imagesToProcess) {
    const inputPath = path.join(inputDir, filename)

    if (!fs.existsSync(inputPath)) {
      console.log(`Skipping ${filename} - not found`)
      continue
    }

    const outputPath = path.join(outputDir, filename)

    // Blur the top 40% of each image where
    // faces typically appear in event photos.
    // Adjust regions based on your images:
    //   x: 0 = left edge (0 to 1)
    //   y: 0 = top edge  (0 to 1)
    //   w: 1 = full width
    //   h: 0.4 = top 40% of image
    //
    // Examples:
    //   Full top half:  { x:0, y:0, w:1, h:0.5 }
    //   Center area:    { x:0.2, y:0.2, w:0.6, h:0.4 }
    //   Left side:      { x:0, y:0, w:0.5, h:1 }
    await blurRegion(inputPath, outputPath, [
      { x: 0, y: 0, w: 1, h: 0.4 },
    ])
  }
  console.log('Done!')
}

main().catch(console.error)
