import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";

export default function InsertArticle() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [rating, setRating] = useState(1);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const articleData = {
      title,
      author,
      date,
      content,
      tags: tags.split(",").map((tag) => tag.trim()), // Split tags by comma
      isApproved: false, // Hidden field, always false
      rating,
    };

    try {
      const response = await fetch("/api/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(articleData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit article");
      }

      // Optionally reset the form after submission
      setTitle("");
      setAuthor("");
      setDate("");
      setContent("");
      setTags("");
      setRating(1);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="p-4">
      <Typography variant="h4" gutterBottom>
        Add a New Article
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Author"
              variant="outlined"
              fullWidth
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Date"
              variant="outlined"
              type="date"
              fullWidth
              value={date}
              onChange={(e) => setDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Content"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Tags (comma separated)"
              variant="outlined"
              fullWidth
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Rating"
              variant="outlined"
              type="number"
              fullWidth
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              inputProps={{
                min: 1,
                max: 5,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
