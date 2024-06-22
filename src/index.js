import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BlogList from './pages/ArticleList';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <BlogList />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
