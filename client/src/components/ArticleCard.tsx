// components/ArticleCard.tsx
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Article } from "../types/Article"; // Adjust path as necessary

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <Card variant="outlined" style={{ margin: "1rem" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {article.title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          by {article.author} on {new Date(article.date).toLocaleDateString()}
        </Typography>
        <Typography variant="body2">{article.content}</Typography>
        <Typography variant="caption" color="textSecondary">
          Tags: {article.tags.join(", ")}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          Rating: {article.rating}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
