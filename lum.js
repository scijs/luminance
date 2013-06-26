"use strict"

var ndarray = require("ndarray")
var cwise = require("cwise")

var computeLuminance =  cwise({
  args: ["array", "array", "array", "array"],
  body: function luminance(out, r, g, b) {
    out = 0.299 * r + 0.587 * g + 0.114 * b
  }
})

module.exports = function luminance(a, b, c, d) {
  switch(arguments.length) {
    case 1:
      var lum_shape = a.shape.slice(0)
      lum_shape.pop()
      var result = ndarray(new Float32Array(a.size), lum_shape)
      computeLuminance(result, a.pick(-1, -1, 0), a.pick(-1, -1, 1), a.pick(-1, -1, 2))
      return result
    case 2:
      computeLuminance(a, b.pick(-1, -1, 0), b.pick(-1, -1, 1), b.pick(-1, -1, 2))
      return a
    case 3:
      var lum_shape = a.shape.slice(0)
      lum_shape.pop()
      var result = ndarray.zeros(lum_shape)
      computeLuminance(result, a, b, c)
      return result
    case 4:
      computeLuminance(a, b, c, d)
      return a
    default:
      throw new Error("Invalid arguments")
  }
}
