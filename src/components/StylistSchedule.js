import React from 'react';
import { addDate } from '../actions/booking';
import { connect } from 'react-redux'; 
import DateTimePicker from 'react-datetime-picker';

class StylistSchedule extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    }
  }

  onChange = (date) => {
    this.setState({ date })
    console.log(date.getMonth()+1, date.getDate(), date.getHours());
    this.props.addDate(date.getMonth()+1, date.getDate(), date.getHours())
  }

  render() {
    return (
      <div className="container">
        <h2>日時</h2>
        <div className="">
          <DateTimePicker
            onChange={this.onChange}
            value={this.state.date}
          />
        </div>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  addDate: (month, date, hours) => dispatch(addDate(month, date, hours))
});

export default connect(
  null,
  mapDispatchToProps
)(StylistSchedule);