import React from 'react';
import { connect } from 'react-redux';
import NewsForm from './NewsForm';
import { addNews } from '../actions/news';

const AddNews = (props) => (
  <div className="addNews">
    <div className="container">
      <h1>追加フォーム</h1>
      <NewsForm
        onSubmit={(news) => {
          props.dispatch(addNews(news));
          props.history.push('/news');
        }}
      />
    </div>
  </div>
);

export default connect()(AddNews);