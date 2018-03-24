import * as express from 'express'
import * as compression from 'compression'

const app = express()

app.use(compression())

app.set('port', process.env.PORT || 1234)

app.use(express.static(__dirname + '/dist'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html')
})

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'))
})
