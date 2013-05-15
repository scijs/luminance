luminance
=========
Converts an RGB image into a [grayscale luminance](http://en.wikipedia.org/wiki/Grayscale) image.

## Example

```javascript
//Load up a test image
var lena = require("lena")

//Convert to grayscale
var grayscale_lena = require("luminance")(lena)

//Write the resulting png to stdout
require("save-pixels")(grayscale_lena, "png").pipe(process.stdout)
```

