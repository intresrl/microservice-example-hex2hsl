import chai from 'chai'
import chaiHttp from 'chai-http'
import config from './http.config.json'
import { tests } from '../test-data/colors'

chai.config.includeStack = true
chai.should()
chai.use(chaiHttp)

describe('Color Converter hsl2hex REST API', () => {
  const url = process.env.npm_config_hsl2hex_test_url || `http://localhost:${config.port}`
  console.log('Test URL: ' + url)

  describe('Convert from HSL to HEX', () => {
    tests.forEach((test) => {
      it(`hsl2hex(${JSON.stringify(test.hslValue)} should equal ${JSON.stringify(test.hexValue)})`, (done) => {
        chai.request(url)
          .get('/hsl2hex')
          .query(test.hslValue)
          .then(res => {
            res.status.should.equal(200)
            res.body.should.deep.equal(test.hexValue)
            done()
          })
      })
    })
  })

  describe('Convert from HEX to HSL', () => {
    tests.forEach((test) => {
      it(`hex2hsl(${JSON.stringify(test.hexValue)} should equal ${JSON.stringify(test.hslValue)})`, (done) => {
        chai.request(url)
          .get('/hex2hsl')
          .query(test.hexValue)
          .then(res => {
            res.status.should.equal(200)
            res.body.should.deep.equal(test.hslValue)
            done()
          })
      })
    })
  })
})
