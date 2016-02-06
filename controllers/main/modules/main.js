var moment = require('moment');

var status = function(){

	this.statusJson = {
	    miguel : {
	        status : 2,
	        datetime : null,
	        time: null,
	        timeago:null
	    },
	    lobo : {
	        status : 1,
	        datetime : new Date(),
	        time: "00:00",
	        timeago: null
	    }
	}

}

status.prototype.enter = function(who, cb){

	this.statusJson[who].status=1;
	this.statusJson[who].datetime = new Date();
	this.statusJson[who].time = nowTime();
	cb(false,true);
}

status.prototype.exit = function(who, cb){

	this.statusJson[who].status=0;
	this.statusJson[who].datetime = new Date();
	this.statusJson[who].time = nowTime();
	cb(false,true);

}

status.prototype.getStatus = function(cb){

	var endJson = addFriendlyText(this.statusJson);
	cb(false,endJson);

}

function nowTime(){

	var d = new Date();
	var hours = d.getHours();
	var minutes = d.getMinutes();

	if (minutes==0){
		minutes = "00";
	}

	var result = hours+":"+minutes;
	return result;
}

function addFriendlyText(json){

	if (json.miguel.datetime != null){
		json.miguel.timeago = moment(json.miguel.datetime).fromNow();
	}

	if (json.lobo.datetime != null){
		json.lobo.timeago = moment(json.lobo.datetime).fromNow();
	}
	
	return json;

}

module.exports = status;