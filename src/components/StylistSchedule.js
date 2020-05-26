import React, { useState } from "react";
import { addDate } from "../actions/booking";
import { connect } from "react-redux";
import DateTimePicker from "react-datetime-picker";

const StylistSchedule = ({ addDate }) => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
    console.log(date.getMonth() + 1, date.getDate(), date.getHours());
    addDate(date.getMonth() + 1, date.getDate(), date.getHours());
  };

  return (
    <div className="container">
      <h2>日時</h2>
      <div className="">
        <DateTimePicker onChange={onChange} value={date} />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addDate: (month, date, hours) => dispatch(addDate(month, date, hours)),
});

export default connect(null, mapDispatchToProps)(StylistSchedule);
