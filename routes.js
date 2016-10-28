var imageUpload = require('./image.js')
var config = require('./config')

module.exports = function(app) {
	app.post('/upload',imageUpload)
	app.get('/upload',function(req,res) {
		res.sendFile(config.dir+'/public/html/photoUploadNew.html')
	})	
}