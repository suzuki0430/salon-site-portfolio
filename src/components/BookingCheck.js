import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import history from "../history";

const BookingCheck = ({ booking }) => {
  const renderActions = () => {
    return (
      <React.Fragment>
        <Link to="/bookingcomplete" className="btn btn-primary btn-lg">
          OK
        </Link>
        <Link to="/booking" className="btn btn-secondary btn-lg">
          Cancel
        </Link>
      </React.Fragment>
    );
  };

  const renderContent = () => {
    if (booking.name) {
      return "予約を確定してもよろしいでしょうか？";
    } else {
      return `記載漏れがございますので、再入力をお願いいたします。`;
    }
  };

  return (
    <Modal
      title="予約確認"
      content={renderContent()}
      actions={renderActions()}
      onDismiss={() => history.push("/")}
      name={booking.name}
      month={booking.month}
      date={booking.date}
      hour={booking.hour}
      course={booking.course}
    />
  );
};

const mapStateToProps = (state) => {
  return { booking: state.booking };
};

export default connect(mapStateToProps, null)(BookingCheck);
