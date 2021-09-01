const express = require('express')
const helmet = require('helmet')
const app = express()
// require('@google-cloud/profiler').start({
//   serviceContext: {
//     service: 'cloudprofiler.googleapis.com',
//     version: '1.0.0',
//   },
// })

app.use(helmet.dnsPrefetchControl())
app.use(helmet.expectCt())
app.use(helmet.frameguard())
app.use(helmet.hidePoweredBy())
app.use(helmet.hsts())
app.use(helmet.ieNoOpen())
app.use(helmet.noSniff())
app.use(helmet.permittedCrossDomainPolicies())
app.use(helmet.referrerPolicy())
app.use(helmet.xssFilter())

app.get('*', (req, res, next) => {
  res.status(302).redirect(`${req.protocol}://${req.hostname}:3000/`)

  next()
})

module.exports = app
