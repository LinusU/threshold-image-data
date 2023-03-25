# Threshold Image Data

Apply black/white threshold to a decoded raw image, using the Rec. 709 luma algorithm.

Should match [ImageMagick's `threshold` operation](https://imagemagick.org/script/command-line-options.php#threshold).

## Installation

```sh
npm install --save threshold-image-data
```

## Usage

```js
const thresholdImageData = require('threshold-image-data')

// Modifies the image in-place
thresholdImageData(image, 0.5)
```

## API

### `thresholdImageData(image, threshold)`

Apply the threshold to the image.

The `image` argument should be a `ImageData` instance, or any object with the following properties:

- `width: Number` - The width of the image, in pixels
- `height: Number` - The height of the image, in pixels
- `data: Buffer | TypedArray` - The image data, stored as raw pixel data in the RGBA order

The image will be modified in-place.

## Related

- [`resize-image-data`](https://github.com/LinusU/resize-image-data) - Resize a decoded raw image
- [`rotate-image-data`](https://github.com/LinusU/rotate-image-data) - Rotate a decoded raw image
