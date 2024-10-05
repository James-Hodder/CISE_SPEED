import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Box, Rating } from "@mui/material";

// Define the Article interface to match your fetched data
interface Article {
  _id: string;
  id: number;
  title: string;
  author: string;
  date: string;
  content: string;
  tags: string[];
  isApproved: boolean;
  rating: number;
  views: number; // Assuming views are tracked
}

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    // Fetch the article data based on the ID from the params
    fetch(`http://localhost:3000/api/articles/${id}`)
      .then((response) => response.json())
      .then((data) => setArticle(data))
      .catch((error) => console.error("Error fetching article:", error));
  }, [id]);

  // Default fallback values
  const defaultTitle = article?.title || "Default Title";
  const defaultAuthor = article?.author || "Unknown Author";
  const defaultDate = article?.date ? new Date(article.date).toLocaleDateString() : "Unknown Date";
  const defaultContent = article?.content || "This is the default article content. No content available.";
  const defaultViews = article?.views || 0;
  const defaultRating = article?.rating || 0;

  return (
    <Container maxWidth="md" sx={{ padding: 4 }}>
      {/* Title */}
      <Typography variant="h3" component="h1" gutterBottom>
        {defaultTitle}
      </Typography>

      {/* Author and Date */}
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        By {defaultAuthor} | Published on: {defaultDate}
      </Typography>

      {/* Views */}
      <Typography variant="subtitle2" color="textSecondary" gutterBottom>
        Views: {defaultViews}
      </Typography>

      {/* Rating */}
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
        <Typography variant="subtitle2" color="textSecondary" sx={{ marginRight: 1 }}>
          Rating:
        </Typography>
        <Rating value={defaultRating} readOnly precision={0.5} />
        <Typography variant="body2" sx={{ marginLeft: 1 }}>
          ({defaultRating}/5)
        </Typography>
      </Box>

      {/* Article Content */}
      <Typography variant="body1" sx={{ marginTop: 4 }}>
        {defaultContent}
      </Typography>
    </Container>
  );
};

export default ArticleDetail;
