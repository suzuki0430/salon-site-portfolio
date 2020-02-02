import React from 'react';
import { connect } from 'react-redux';
import NewsListItem from './NewsListItem';
import { NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NewsPage = (props) => {
  return (
    <div className="NewsPage">
      <div className="container">
        <h1 className="border-bottom">News</h1>
        {props.news.map((news) => {
          return <NewsListItem key={news.id} {...news} />;
        })}
        <LinkContainer to="/addnews" activeClassName="is-active">
          <NavItem className="link_addNews">追加フォームはこちら</NavItem>
        </LinkContainer> 
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    news: state.news
  };
};

export default connect(mapStateToProps)(NewsPage);
