const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  id: Number,
  title: String,
  author: String,
  date: Date,
  content: String,
  tags: [String],
  isApproved: Boolean,
  rating: Number,
});

module.exports = Article = mongoose.model("article", ArticleSchema);
