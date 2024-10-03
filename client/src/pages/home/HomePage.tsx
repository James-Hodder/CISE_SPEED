import { useEffect, useState } from "react";

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

export default function HomePage() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    // Fetch articles from the backend API
    fetch("http://localhost:3000/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Error fetching articles:", error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Recommended Articles
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article._id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-4">{article.author}</p>
              <p className="text-gray-800">
                {article.content.substring(0, 100)}...
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Published: {new Date(article.date).toLocaleDateString()}
              </p>
            </div>
            <div className="p-4 bg-gray-100">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
