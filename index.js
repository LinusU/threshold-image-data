'use strict'

module.exports = function thresholdImageData (image, threshold) {
  for (let i = 0; i < image.data.length; i += 4) {
    const r = image.data[i] / 255
    const g = image.data[i + 1] / 255
    const b = image.data[i + 2] / 255

    const l = 0.212656 * r + 0.715158 * g + 0.072186 * b
    const out = l <= threshold ? 0 : 255

    image.data[i] = out
    image.data[i + 1] = out
    image.data[i + 2] = out
  }
}
