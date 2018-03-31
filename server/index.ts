// Import npm packages
import * as compression from 'compression'
import * as mongoose from 'mongoose'
import * as express from 'express'
import * as path from 'path'

// Import logger utils
import { log, success, error } from './src/log'

// Connection to MongoDB
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017')
  .then(() => log(success('Connected to MongoDB')))
  .catch(() => log(error('MongoDB connection failed')))

// Create Express App
const app = express()

// GZip Compression
app.use(compression())

// Listening port set
app.set('port', process.env.PORT || 4200)

// Static directories declaration
app.use(express.static(path.join(__dirname, 'client')))
app.use(express.static(path.join(__dirname, 'public')))

// Get locales json
app.get('/locale/:lang', (req, res) => {
  res.sendFile(path.join(__dirname, 'locales', `${req.params.lang}.json`))
})

// All app routes
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'))
})

// Application start
app.listen(app.get('port'), () => {
  log(success(`Server is running on port ${app.get('port')}`))
})
