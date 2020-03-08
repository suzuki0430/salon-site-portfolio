import React from 'react';
import { connect } from 'react-redux'; 
import { Link } from 'react-router-dom';

class BookingDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container booking_details">
        <h2>予約詳細</h2>
        <div className="list-group">
          <div className="list-group-item">スタイリスト：{this.props.booking.name}</div>
          <div className="list-group-item">コース：{this.props.booking.course}</div>
          <div className="list-group-item">予約日時：
            {this.props.booking.month}月　
            {this.props.booking.date}日　
            {this.props.booking.hour}時　
          </div>
        </div>
        <Link to="/bookingcheck" className="btn btn-primary btn-block btn-lg">予約確認</Link>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    booking: state.booking
  };
};

export default connect(
  mapStateToProps,
  null
)(BookingDetails);