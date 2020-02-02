import React from 'react';
import { NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NewsListItem = ({ id, title, note, createdAt }) => (
  <div className="NewsListItem border-bottom">
    <div className="container">
      <h2>{title}</h2>
      <p>{note}</p>
      <LinkContainer to={`/editnews/${id}`}>
        <NavItem className="link_editNews">Edit</NavItem>
      </LinkContainer>   
      <small>{createdAt}</small>
    </div>
  </div>
);

export default NewsListItem;