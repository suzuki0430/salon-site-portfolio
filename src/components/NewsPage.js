import React from 'react';
import { connect } from 'react-redux';
import NewsListItem from './NewsListItem';

const NewsPage = (props) => (
  <div className="container">
    <h1>News</h1>
    {props.news.map((news) => {
      return <NewsListItem key={news.id} {...news} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    news: state.news
  };
};

export default connect(mapStateToProps)(NewsPage);

// import React from 'react';
// import Form from './Form';
// import List from './List';


// const NewsPage = (props) => (
//   <div className="container">
//     <List
//       posts={this.props.posts} />
//   </div>
// );