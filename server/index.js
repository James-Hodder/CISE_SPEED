const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const DB = process.env.MongoDB;

// Enable CORS for cross-origin requests
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB Connection
const mongoURI = DB; // For MongoDB Atlas or local MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

// Define Article Schema and Model
const articleSchema = new mongoose.Schema({
  id: Number, // Ensure this is unique if you're using it
  title: String,
  author: String,
  date: Date,
  content: String,
  tags: [String],
  isApproved: Boolean,
  rating: Number,
  views: { type: Number, default: 0 }, // Add views field with default value
});

const Article = mongoose.model("Article", articleSchema);

// Route to get all articles
app.get("/api/articles", async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch articles" });
  }
});

// Route to get a single article by ID (_id or custom id)
app.get("/api/articles/:id", async (req, res) => {
  try {
    // Check if the ID is a MongoDB _id or custom id field
    const query = mongoose.Types.ObjectId.isValid(req.params.id)
      ? { _id: req.params.id }
      : { id: req.params.id };
    
    const article = await Article.findOne(query);
    
    if (!article) {
      return res.status(404).json({ error: "Article not found" });
    }

    // Increment views count when article is fetched
    article.views += 1;
    await article.save();

    res.json(article);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch the article" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
