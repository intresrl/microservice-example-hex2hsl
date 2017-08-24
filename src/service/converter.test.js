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
