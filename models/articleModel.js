// require mongoose
var mongoose = require('mongoose')
	, Schema = mongoose.Schema;

// new Schema
var SavedArticleSchema = Schema({
	title: {
		type: String,
		required: true
	},
	date: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true,
		unique: true 
	}
});

var SavedArticle = mongoose.model('SavedArticle', SavedArticleSchema);

module.exports = SavedArticle;