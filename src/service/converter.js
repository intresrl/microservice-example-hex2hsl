import convert from 'color-convert'

export function hsl2hex (hsl) {
  const {hue, saturation, lightness} = hsl
  return { 'hex': convert.hsl.hex(hue, saturation, lightness).toLowerCase() }
}

export function hex2hsl (hex) {
  const hsl = convert.hex.hsl(hex.hex)
  return { 'hue': hsl[0], 'saturation': hsl[1], 'lightness': hsl[2] }
}
