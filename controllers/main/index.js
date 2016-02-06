var express = require('express');

var app = module.exports = express();  

var users = ["miguel","lobo"];

//Modules
var main = require( __dirname + '/modules/main.js');

//Create object
var status = new main(null);

//GET Status
app.get('/status/', function(req, res) {

	status.getStatus(function(err, json){
		if (!err){
			res.json(json);
		}
	});
	
})

//POST
app.post('/enter/:who', function(req, res) {

	var who = req.params.who

	if(users.indexOf(who)>-1){
		status.enter(who, function(err,done){
			if (!err){
				res.json({saved:true})
			}else{
				res.json({saved:false})
			}
		})
	}else{
		res.json({saved:false})
	}

})

app.post('/exit/:who', function(req, res) {

	var who = req.params.who

	if(users.indexOf(who)>-1){
		status.exit(who, function(err,done){
			if (!err){
				res.json({saved:true})
			}else{
				res.json({saved:false})
			}
		})
	}else{
		res.json({saved:false})
	}

})
