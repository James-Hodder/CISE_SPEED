const express = require("express");
const router = express.Router();

// Load articles model
const Article = require("../../models/Articles");

// @route GET api/articles/test
// @description tests articles route
// @access Public
router.get("/test", (req, res) => res.send("article route testing!"));

// @route GET api/articles
// @description Get all articles
// @access Public
router.get("/", (req, res) => {
  Article.find()
    .then((articles) => res.json(articles))
    .catch((err) =>
      res.status(404).json({ noarticlesfound: "No Articles found" })
    );
});

// @route GET api/articles/:id
// @description Get single article by id
// @access Public
router.get("/:id", (req, res) => {
  Article.findById(req.params.id)
    .then((article) => {
      if (!article) {
        return res.status(404).json({ noarticlefound: "No Article found" });
      }
      res.json(article);
    })
    .catch((err) =>
      res.status(404).json({ noarticlefound: "No Article found" })
    );
});

// @route POST api/articles
// @description Add/save article and auto-increment ID
// @access Public
router.post("/", express.json(), async (req, res) => {
  try {
    // Find the current highest id in the database
    const lastArticle = await Article.findOne().sort({ id: -1 });

    // Format the date to 'YYYY-MM-DD'
    const formattedDate = new Date(req.body.date).toISOString().split("T")[0]; // Keep only the date part

    const newArticle = new Article({
      ...req.body,
      date: formattedDate, // Now it will be stored as a string in 'YYYY-MM-DD' format
      id: lastArticle ? lastArticle.id + 1 : 1, // Increment the highest ID, or set to 1 if no articles exist
    });

    await newArticle.save();
    res
      .status(201)
      .json({ msg: "Article added successfully", article: newArticle });
  } catch (err) {
    res.status(400).json({ error: "Unable to add this article" });
  }
});

// @route PUT api/articles/:id
// @description Update article
// @access Public
router.put("/:id", (req, res) => {
  Article.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((article) => {
      if (!article) {
        return res.status(404).json({ noarticlefound: "No Article found" });
      }
      res.json({ msg: "Updated successfully", article });
    })
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route DELETE api/articles/:id
// @description Delete article by id
// @access Public
router.delete("/:id", (req, res) => {
  Article.findByIdAndRemove(req.params.id)
    .then((article) => {
      if (!article) {
        return res.status(404).json({ noarticlefound: "No such article" });
      }
      res.json({ msg: "Article entry deleted successfully" });
    })
    .catch((err) => res.status(404).json({ error: "No such article" }));
});

module.exports = router;
