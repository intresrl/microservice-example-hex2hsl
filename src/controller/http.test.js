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
import chaiHttp from 'chai-http'
import config from './http.config.json'
// import { tests } from '../test-data/colors'

chai.config.includeStack = true
// const should = chai.should()
chai.use(chaiHttp)

describe('Color Converter hsl2hex REST API', () => {
  const url = process.argv.find(arg => arg.startsWith('--test_url')).substr(11) || `http://localhost:${config.port}`
  console.log('Test URL: ' + url)

  // TODO Esercizio
  // describe('Convert from HSL to HEX', () => {
  //   tests.forEach((test) => {
  //     it(`hsl2hex(${JSON.stringify(test.hslValue)} should equal ${JSON.stringify(test.hexValue)})`, (done) => {
  //       chai.request(url)
  //         .get('/hsl2hex')
  //         .query(test.hslValue)
  //         .end((err, res) => {
  //           should.not.exist(err)
  //           res.should.have.status(200)
  //           res.body.should.deep.equal(test.hexValue)
  //           done()
  //         })
  //     })
  //   })
  // })

  // TODO Esercizio
  // describe('Convert from HEX to HSL', () => {
  //   tests.forEach((test) => {
  //     it(`hex2hsl(${JSON.stringify(test.hexValue)} should equal ${JSON.stringify(test.hslValue)})`, (done) => {
  //       chai.request(url)
  //         .get('/hex2hsl')
  //         .query(test.hexValue)
  //         .end((err, res) => {
  //           should.not.exist(err)
  //           res.should.have.status(200)
  //           res.body.should.deep.equal(test.hslValue)
  //           done()
  //         })
  //     })
  //   })
  // })
})
