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

import chai from 'chai'
import { hex2hsl, hsl2hex } from './converter.js'
import { tests } from '../test-data/colors'

chai.config.includeStack = true
chai.should()

describe('Color Converter hsl2hex', () => {
  describe('Convert from HSL to HEX', () => {
    tests.forEach((test) => {
      it(`hsl2hex(${JSON.stringify(test.hslValue)} should equal ${JSON.stringify(test.hexValue)})`, () => {
        hsl2hex(test.hslValue).should.deep.equal(test.hexValue)
      })
    })
  })

  describe('Convert from HEX to HSL', () => {
    tests.forEach((test) => {
      it(`hex2hsl(${JSON.stringify(test.hexValue)} should equal ${JSON.stringify(test.hslValue)})`, () => {
        hex2hsl(test.hexValue).should.deep.equal(test.hslValue)
      })
    })
  })
})
