// pages/articles/index.tsx
import { GetServerSideProps, NextPage } from "next";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Article } from "../../types/Article"; // Import your Article type
import { useState } from "react";

type ArticlesProps = {
  articles: Article[]; // Use your Article type
};

const Articles: NextPage<ArticlesProps> = ({ articles }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      new Date(article.date).toLocaleDateString().includes(searchQuery)
  );

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        All Published Articles
      </Typography>

      {/* Search bar */}
      <TextField
        label="Search by title, author or date"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Table container */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell>Approved</TableCell>
              <TableCell>Tags</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredArticles.map((article) => (
              <TableRow key={article.id}>
                <TableCell>{article.title}</TableCell>
                <TableCell>{article.author}</TableCell>
                <TableCell>
                  {new Date(article.date).toLocaleDateString()}
                </TableCell>
                <TableCell>{article.rating}</TableCell>
                <TableCell>{article.isApproved ? "Yes" : "No"}</TableCell>
                <TableCell>{article.tags.join(", ")}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

// Fetch articles from the API and pass them as props
export const getServerSideProps: GetServerSideProps<
  ArticlesProps
> = async () => {
  const res = await fetch("http://localhost:5001/api/articles"); // Adjust the API URL if necessary
  const articles = await res.json();

  return {
    props: {
      articles: articles.map((article: any) => ({
        id: article.id,
        title: article.title,
        author: article.author,
        date: new Date(article.date).toISOString(), // Convert Date to a string
        content: article.content,
        tags: article.tags,
        isApproved: article.isApproved,
        rating: article.rating,
      })),
    },
  };
};

export default Articles;
