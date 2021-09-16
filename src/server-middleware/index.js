/* eslint-disable no-console */
import { cleanDoubleSlashes, normalizeURL } from 'ufo'
import express from 'express'
import {
  dnsPrefetchControl,
  expectCt,
  frameguard,
  hidePoweredBy,
  hsts,
  ieNoOpen,
  noSniff,
  permittedCrossDomainPolicies,
  referrerPolicy,
  xssFilter,
} from 'helmet'

const getExpress = () => express()

const app = getExpress()
// require('@google-cloud/profiler').start({
//   serviceContext: {
//     service: 'cloudprofiler.googleapis.com',
//     version: '1.0.0',
//   },
// })

app.use(dnsPrefetchControl())
app.use(expectCt())
app.use(frameguard())
app.use(hidePoweredBy())
app.use(hsts())
app.use(ieNoOpen())
app.use(noSniff())
app.use(permittedCrossDomainPolicies())
app.use(referrerPolicy())
app.use(xssFilter())

app.all('*', (req, res, next) => {
  const env = process.env.NODE_ENV
  const url = 'http://' + req.headers.host.replace(/^www\./, '') + req.url
  console.log('url: ', url)
  const normalizedURL = normalizeURL(cleanDoubleSlashes(url))
  console.log('normalizedURL: ', normalizedURL)
  if (env === 'production' && req.headers.host.match(/^www/) !== null) {
    res.writeHead(301, { Location: normalizedURL })
    res.end()
  }
  next()
})

module.exports = {
  path: '/',
  handler: app,
}
