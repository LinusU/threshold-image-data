interface ImageLike {
  width: number
  height: number
  data: Uint8Array | Uint8ClampedArray
}

declare function thresholdImageData(image: ImageLike, threshold: number): void

export = thresholdImageData
