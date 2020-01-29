import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class NewsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.news ? props.news.title : '',
      note: props.news ? props.news.note : '',
      createdAt: props.news ? moment(props.news.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }
  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.title || !this.state.note) {
      this.setState(() => ({ error: 'タイトルと内容のどちらかが記入されていません。' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        title: this.state.title,
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="タイトル"
            autoFocus
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="内容を記入してください。"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>登録</button>
        </form>
      </div>
    )
  }
}
