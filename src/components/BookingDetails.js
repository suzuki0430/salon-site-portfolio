import React from "react";
import { connect } from "react-redux";

import BookingConfirmButton from "./BookingConfirmButton";

const BookingDetails = ({ booking }) => {
  return (
    <div className="container booking_details">
      <h2>予約詳細</h2>
      <div className="list-group">
        <div className="list-group-item">スタイリスト：{booking.name}</div>
        <div className="list-group-item">コース：{booking.course}</div>
        <div className="list-group-item">
          予約日時：
          {booking.month}月　
          {booking.date}日　
          {booking.hour}時　
        </div>
      </div>
      <BookingConfirmButton />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    booking: state.booking,
  };
};

export default connect(mapStateToProps, null)(BookingDetails);
