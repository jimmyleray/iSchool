import * as compression from 'compression'
import * as express from 'express'
import * as path from 'path'
import { log, success } from './src/log'

import * as mongoose from 'mongoose'
mongoose.connect(process.env.MONGODB_URI).then(log)

const app = express()

app.use(compression())

app.set('port', process.env.PORT || 4200)

app.use(express.static(path.join(__dirname, 'client')))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/locale/:lang', (req, res) => {
  res.sendFile(path.join(__dirname, 'locales', `${req.params.lang}.json`))
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'))
})

app.listen(app.get('port'), () => {
  log(success(`Server is running on port ${app.get('port')}`))
})
