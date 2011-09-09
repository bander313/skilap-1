var async = require("async");

module.exports = function account(ctx, app, api, prefix) {

	app.get("/users", function(req, res, next) {
		var t = [];
		async.waterfall([
			async.apply(api.getAllUsers,req.session.apiToken),
			function render (users) {
				res.render(__dirname+"/../views/users", {prefix:prefix, users: users});
			}],
			next
		);
	});

	app.post("/users/new", function (req, res, next) {
		var user = {screenName:req.body.name,login:req.body.login,password:req.body.password};
		async.series([
			async.apply(api.saveUser,req.session.apiToken,user),
		], function (err) {
			res.redirect("/users");
		})
	});
}