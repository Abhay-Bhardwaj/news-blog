import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import LikedPage from './pages/LikedPage';
import { NewsProvider } from './context/NewsContext';
function App() {

  return (

    <NewsProvider>
      <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/article/:id" element={<ArticlePage />} />
            <Route path="/favourite" element={<LikedPage />} />
            
        </Routes>
      </Router>

    </NewsProvider>

  );

}

export default App;
