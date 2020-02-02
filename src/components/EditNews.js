import React from 'react';
import { connect } from 'react-redux';
import NewsForm from './NewsForm';
import { editNews, removeNews } from '../actions/news';

const EditNews = (props) => {
  return (
    <div className="editNews">
      <div className="container">
        <h1>編集フォーム</h1>
        <NewsForm
          news={props.news}
          onSubmit={(news) => {
            props.dispatch(editNews(props.news.id, news));
            props.history.push('/news');
          }}
        />
        <button onClick={() => {
          props.dispatch(removeNews({ id: props.news.id }));
          props.history.push('/news');
        }}
          className="btn btn-light btn-lg"
        >削除</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    news: state.news.find((news) => news.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditNews);