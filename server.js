const express = require('express')
const app = express()

app.set('port', process.env.PORT || 1234)

app.use(express.static(__dirname + '/build'))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/build/index.html')
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'))
})
