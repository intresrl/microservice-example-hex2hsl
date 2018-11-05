/*
 * This color converter software is part of a micro-service architecture written for demonstration purposes.
 * Copyright (C)  2017  Gianni Bombelli @ Intré S.r.l.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

export const tests = [
  { hslValue: { hue: 0, saturation: 100, lightness: 50 }, hexValue: { hex: 'ff0000' } },
  { hslValue: { hue: 45, saturation: 100, lightness: 50 }, hexValue: { hex: 'ffbf00' } },
  { hslValue: { hue: 90, saturation: 100, lightness: 50 }, hexValue: { hex: '80ff00' } },
  { hslValue: { hue: 135, saturation: 100, lightness: 50 }, hexValue: { hex: '00ff40' } },
  { hslValue: { hue: 180, saturation: 100, lightness: 50 }, hexValue: { hex: '00ffff' } },
  { hslValue: { hue: 225, saturation: 100, lightness: 50 }, hexValue: { hex: '0040ff' } },
  { hslValue: { hue: 315, saturation: 100, lightness: 50 }, hexValue: { hex: 'ff00bf' } },
  { hslValue: { hue: 345, saturation: 100, lightness: 50 }, hexValue: { hex: 'ff0040' } }
  // ,
  // { hslValue: { hue: 340, saturation: 80, lightness: 95 }, hexValue: { hex: 'fce8ef' } },
  // { hslValue: { hue: 340, saturation: 80, lightness: 5 }, hexValue: { hex: '170309' } }
]
