var Mongoose = require("mongoose");

var Schema   = Mongoose.Schema;

var eventSchema = new Schema({
	title : String,
	status: String,
	skills: String,
	name  : String,
	email : String
});

eventSchema.methods.joiValidate = function(obj) {
	var Joi = require('joi');
	var schema = {
		title: Joi.types.String().required(),
		status: Joi.types.String().required(),
		skills: Joi.types.String().required(),
		name: Joi.types.String().required(),
		email: Joi.types.String().email().required(),
	}
	return Joi.validate(obj, schema);
}

module.exports = Mongoose.model('MeetupEvent', eventSchema);
