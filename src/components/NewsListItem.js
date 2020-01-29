import React from 'react';

const NewsListItem = ({ id, title, note, createdAt }) => (
  <div className="container">
    <h2>{title}</h2>
    <p>{note}</p>
    <small>{createdAt}</small>
  </div>
);

export default NewsListItem;