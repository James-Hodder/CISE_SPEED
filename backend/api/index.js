// const express = require("express");
// const app = express();

// app.get("/", (req, res) => res.send("Express on Vercel"));

// app.listen(5000, () => console.log("Server ready on port 5000."));

// module.exports = app;
const express = require("express");
const mongoose = require("mongoose");
const articlesRouter = require("../route/articles"); // Import the routes

const app = express();
app.use(express.json()); // Middleware for parsing JSON

// MongoDB connection
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Routes
app.use("/articles", articlesRouter);

// Basic route
app.get("/", (req, res) => res.send("Express on Vercel"));

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server ready on port ${PORT}`));

module.exports = app;
