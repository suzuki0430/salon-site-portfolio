import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const BookingConfirmButton = ({ booking }) => {
  if (
    booking.name &&
    booking.month &&
    booking.date &&
    booking.hour &&
    booking.course
  ) {
    return (
      <React.Fragment>
        <Link to="/bookingcheck" className="btn btn-primary btn-block btn-lg">
          予約確認
        </Link>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <span className="disabledCursor btn btn-secondary btn-block btn-lg">
          予約確認
        </span>
      </React.Fragment>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    booking: state.booking,
  };
};

export default connect(mapStateToProps, null)(BookingConfirmButton);
