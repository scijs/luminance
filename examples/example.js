//Load up a test image
var lena = require("lena")

//Convert to grayscale
var grayscale_lena = require("../lum")(lena)

//Write the resulting png to stdout
require("save-pixels")(grayscale_lena, "png").pipe(process.stdout)
