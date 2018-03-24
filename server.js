const express = require('express')
const app = express()

app.set('port', process.env.PORT || 5000)

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/dist/index.html')
})

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'))
})
