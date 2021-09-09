const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const investorSchema = new mongoose.Schema({
	name: {
		type: "string",
		required: true,
	},
	email: {
		type: "string",
		required: true,
		unique: true,
		match:
			/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
	},
	password: {
		type: "string",
		required: true,
	},
	profile_picture: {
		type: "string",
		default:
			"https://toppng.com/uploads/preview/instagram-default-profile-picture-11562973083brycehrmyv.png",
	},
	mobileno: {
		type: "string",
		required: true,
	},
	city: {
		type: "string",
		required: true,
	},
	district: {
		type: "string",
		required: true,
	},
	state: {
		type: "string",
		required: true,
	},
	pincode: {
		type: "string",
		required: true,
	},
	business: {
		type: "string",
		required: true,
	},
	invested_ideas: [
		{
			type: ObjectId,
			ref: "Idea",
		},
	],
	interested_ideas: [
		{
			type: ObjectId,
			ref: "Idea",
		},
	],
});

module.exports = mongoose.model("Investor", investorSchema);
