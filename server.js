var express = require('express')
var bodyParser = require('body-parser')
var config = require('./config.js')
var app = express()

app.use(express.static(__dirname+'/public'))
app.use(bodyParser({limit:'50mb'}))
app.use(bodyParser.json())

require('./routes.js')(app)

app.listen(config.port,function() {
	console.log('The app is listening on ',config.port)
})
