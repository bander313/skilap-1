var skilap = require('skilap-core');
var sapp = skilap.createApp();
sapp.startApp(__dirname+"/data/",function (err) {
	if (err) console.log(err);
});