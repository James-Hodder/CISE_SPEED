import Header from "./components/header/Header";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, AboutPage, StartPage, InsertArticle } from "./pages";
import RegisterPage from "./pages/login/RegisterPage";
import LoginPage from "./pages/login/LoginPage";
import ArticleDetail from "./pages/article/ArticleDetail";

const App: React.FC = () => {
  return (
    <Router>
      <Header /> {/* Render Header on all pages */}
      <Routes>
        <Route path="/" element={<StartPage />} /> {/* Default page */}
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/InsertPage" element={<InsertArticle />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/article/:id" element={<ArticleDetail />} /> {/* Detail Page */}
      </Routes>
    </Router>
  );
};

export default App;
