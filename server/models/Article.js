const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  id: Number,
  title: String,
  author: String,
  date: Date,
  content: String,
  tags: [String],
  isApproved: Boolean,
  rating: Number,
});

// Create a model based on the schema
const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
