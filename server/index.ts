import * as compression from 'compression'
import * as express from 'express'
import * as path from 'path'

const app = express()

app.use(compression())

app.set('port', process.env.PORT || 4200)

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'))
})
