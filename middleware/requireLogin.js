const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const JWT_SECRET = require("../key");
const User = mongoose.model("User");
module.exports = (req, res, next) => {
	const { authorization } = req.headers;
	if (!authorization) {
		return res.status(401).json({ error: "You must be logged In" });
	}
	const token = authorization.replace("Bearer ", "");
	jwt.verify(token, JWT_SECRET, (err, payload) => {
		if (err) {
			return res.status(401).json({ error: "You must be logged In" });
		}
		const { _id} = payload;
		User.findById(_id).then((userdata) => {
			req.user = userdata;
			next();
		});
	});
};


// {
// 	"title":"post 1",
// 	"body":"this is posst 1",
// 	"status":"active"
// 	}