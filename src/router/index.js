import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogList from '../pages/ArticleList';
import ArticleDetail from '../pages/ArticleShow';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" exact component={BlogList} />
      <Route path="/articles/show" component={ArticleDetail} />
    </Routes>
  </Router>
);

export default AppRoutes;
