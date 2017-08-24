import express from 'express'
import config from './http.config.json'
import { hex2hsl, hsl2hex } from '../service/converter.js'

const app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', config.cors)
  res.header('Access-Control-Allow-Methods', 'GET')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/hsl2hex', function (req, res) {
  var hue = parseInt(req.query.hue, 10)
  var saturation = parseInt(req.query.saturation, 10)
  var lightness = parseInt(req.query.lightness, 10)

  res.send(hsl2hex({'hue': hue, 'saturation': saturation, 'lightness': lightness}))
})

app.get('/hex2hsl', function (req, res) {
  res.send(hex2hsl({'hex': req.query.hex}))
})

app.listen(config.port)
