var express = require('express')
var bodyParser = require('body-parser')
var config = require('./config')
var app = express()

app.use(express.static(__dirname+'/public'))
app.use(bodyParser.json({
	limit:'50mb'
}))

require('./routes')(app)

app.listen(config.port,function() {
	console.log('The app is listening on ',config.port)
})
