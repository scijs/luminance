luminance
=========
Converts an RGB image into a [grayscale luminance](http://en.wikipedia.org/wiki/Grayscale) image.  This is built on the [ndarray library](https://github.com/mikolalysenko/ndarray).

## Example

```javascript
//Load up a test image
var lena = require("lena")

//Convert to grayscale
var grayscale_lena = require("luminance")(lena)

//Write the resulting png to stdout
require("save-pixels")(grayscale_lena, "png").pipe(process.stdout)
```

Which creates the following image:

<img src="https://raw.github.com/mikolalysenko/luminance/master/examples/lena.png">

## Install

    npm install luminance
    
## API

```javascript
var luminance = require("luminance")
```

### `luminance(img)`

**Returns** A gray scale version of `img`

### `luminance(result, img)`

**Returns** A gray scale version of `img`, the result is stored in `result`

### `luminance(red, green, blue)`

**Returns** A gray scale image with red, green and blue channels in the given ndarrays

### `luminance(result, red, green, blue)`

**Returns** A luminance image of red/green/blue with result stored in result.

## Credits
(c) 2013 Mikola Lysenko. MIT License