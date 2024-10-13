// app.js

const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const articles = require("./routes/api/articles");

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

app.get("/", (req, res) => res.send("Hello world!"));

// use Routes
app.use("/api/articles", articles);

// const port = process.env.PORT || 8082;
const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server running on port ${port}`));
