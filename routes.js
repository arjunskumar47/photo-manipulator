var imageUpload = require('./image.js')

module.exports = function(app) {
	app.post('imageUpload',imageUpload)
}