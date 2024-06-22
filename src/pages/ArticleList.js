import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BlogList extends Component {
  render() {
    return (
      <>
        <div>
          <p>文章列表页面</p>
          <Link to="/articles/show">文章详情页面</Link>
        </div>
      </>
    )
  }
}
