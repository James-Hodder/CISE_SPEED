const express = require("express");
const router = express.Router();
const Article = require("../models/Article"); // Adjust the path as necessary

// Get all articles
router.get("/", async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to fetch articles where isApproved is false and isAnalysis is true
router.get("/moderation", async (req, res) => {
  try {
    const articles = await Article.find({
      isApproved: false,
      isAnalysis: true,
    });
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: "Error fetching articles." });
  }
});

// Route to update isApproved status of an article
router.put("/approve/:id", async (req, res) => {
  const { id } = req.params;
  const { isApproved } = req.body;

  try {
    const updatedArticle = await Article.findByIdAndUpdate(
      id,
      { isApproved },
      { new: true }
    );

    if (!updatedArticle) {
      return res.status(404).json({ message: "Article not found." });
    }

    res.json({
      message: "Article status updated successfully.",
      updatedArticle,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating article status." });
  }
});

// Route to get a single article by custom id
router.get("/:id", (req, res) => {
  const articleId = parseInt(req.params.id, 10);
  Article.findOne({ id: articleId })
    .then((article) => {
      if (!article) {
        return res.status(404).json({ noarticlefound: "No Article found" });
      }
      res.json(article);
    })
    .catch(() => res.status(404).json({ noarticlefound: "No Article found" }));
});

// Route to add/save article with auto-incrementing id
router.post("/", express.json(), async (req, res) => {
  try {
    const lastArticle = await Article.findOne().sort({ id: -1 });
    const formattedDate = new Date(req.body.date).toISOString().split("T")[0];

    const newArticle = new Article({
      ...req.body,
      date: formattedDate,
      id: lastArticle ? lastArticle.id + 1 : 1,
    });

    await newArticle.save();
    res
      .status(201)
      .json({ msg: "Article added successfully", article: newArticle });
  } catch (err) {
    res.status(400).json({ error: "Unable to add this article" });
  }
});

// Route to update article by custom id
router.put("/:id", (req, res) => {
  const articleId = parseInt(req.params.id, 10);
  Article.findOneAndUpdate({ id: articleId }, req.body, { new: true })
    .then((article) => {
      if (!article) {
        return res.status(404).json({ noarticlefound: "No Article found" });
      }
      res.json({ msg: "Updated successfully", article });
    })
    .catch(() =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// Route to fetch articles where isAnalysis is false
router.get("/analysis/pending", async (req, res) => {
  try {
    const articles = await Article.find({ isAnalysis: false });
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: "Error fetching articles." });
  }
});

// Route to delete article by custom id
router.delete("/:id", (req, res) => {
  const articleId = parseInt(req.params.id, 10);
  Article.findOneAndRemove({ id: articleId })
    .then((article) => {
      if (!article) {
        return res.status(404).json({ noarticlefound: "No Article found" });
      }
      res.json({ msg: "Article entry deleted successfully" });
    })
    .catch(() => res.status(500).json({ error: "Failed to delete article" }));
});

module.exports = router;
