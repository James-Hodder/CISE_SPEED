// pages/articles/[id].tsx

import { GetServerSideProps } from "next";
import { Paper, Typography } from "@mui/material";
import { Article } from "../../types/Article"; // Import your Article type

type ArticleProps = {
  article: Article;
};

const ArticleDetail: React.FC<ArticleProps> = ({ article }) => {
  return (
    <Paper style={{ padding: "20px", margin: "20px" }}>
      <Typography variant="h4" gutterBottom>
        {article.title}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        By {article.author} on {new Date(article.date).toLocaleDateString()}
      </Typography>
      <Typography variant="body1" paragraph>
        {article.content}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Tags: {article.tags.join(", ")}
      </Typography>
    </Paper>
  );
};

// Fetch article data based on the ID
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const res = await fetch(`http://localhost:5000/api/articles/${id}`);
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export default ArticleDetail;
