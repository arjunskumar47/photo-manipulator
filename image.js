var fs = require('fs')
var config = require('./config.js')

module.exports = function(req,res) {	
	var resJson = {
		status: 'failure',
		message: '',
		data:null
	}
	var obj = req.body
	if(obj.base64Text==undefined||!obj.base64Text||obj.base64Text.length==0) {
		resJson['status'] = 'success',
		resJson['message'] = 'Remember to save the image before submitting'
		return resJson(resJson)
	}
	if(obj.imageName==undefined||obj.imageName.length==0) {
		resJson['status'] = 'success',
		resJson['message'] = 'Enter the image name before submitting'	
		return resJson(resJson)
	}
	console.log('Coming here')
	var splitArray = obj.base64Text.split(',')
	var dataBuffer = new Buffer(splitArray[1],'base64')
	fs.writeFile(config.dir+'/public/uploads/'+obj.imageName+'.png',dataBuffer,function(err) {
		if(err) {
			res.sendStatus(403)

		}
		else {
			resJson['status'] = 'success',
			resJson['message'] = 'You can access your image at'+'localhost:3000/uploads/'+obj.imageName+'.png'
			return res.json(resJson)
		}
	})
}