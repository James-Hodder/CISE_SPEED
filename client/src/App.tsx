import {Header, CardContainer} from './components';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage, AboutPage, ArticleCatagory, StartPage } from './pages';


const App: React.FC = () => {
  return (
    <Router>
      <Header /> {/* Render Header on all pages */}
      <Routes>
        <Route path="/" element={<StartPage />} /> {/* Default page */}
        <Route path="/HomePage" element={<HomePage />} />
        {/* <Route path="/ArticleCategories" element={<ArticleCategories />} /> */}
        <Route path="/AboutPage" element={<AboutPage />} />
        {/* <Route path="/DatabasePage" element={<DatabasePage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;