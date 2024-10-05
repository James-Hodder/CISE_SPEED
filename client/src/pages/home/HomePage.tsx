import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom"; // Import Link for navigation

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
}

const HomePage: React.FC = () => {
  console.log("Home Page Loaded");
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    // Fetch articles from the backend API
    fetch("http://localhost:3000/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  return (
    <Container maxWidth="lg" sx={{ padding: 4 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Articles
      </Typography>
      <Grid container spacing={4}>
        {articles.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article._id}>
            <Card variant="outlined" sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {article.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {article.author}
                </Typography>
                <Typography variant="body1">
                  {article.content.substring(0, 100)}...
                </Typography>
                <Typography variant="caption" color="textSecondary" mt={2}>
                  Published: {new Date(article.date).toLocaleDateString()}
                </Typography>
              </CardContent>
              {/* Wrap the button in a Link to navigate to the detail page */}
              <Button
                component={Link}
                to={`/article/${article._id}`}
                variant="contained"
                color="primary"
                sx={{ margin: 2 }}
              >
                Read More
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
