import React from 'react';
import StylistInfo from './StylistInfo';
import StylistSchedule from './StylistSchedule';
import StylistCourse from './StylistCourse';
import BookingDetails from './BookingDetails';

const Booking = () => (
  <div className="booking_content">
    <div className="container">
      <h1 className="border-bottom">予約フォーム</h1>
      <div className="row">
        <div className="col-md-6 col-12">
          <div className="stylist">
            <h2>スタイリスト</h2>
            <StylistInfo
              id="1"
              name={"　DEAN FUJIOKA"}
            />
            <StylistInfo
              id="2"
              name={"　HIROSHI FUJIOKA"}
            />
          </div>
          <div className="stylist"><StylistCourse /></div>
          <div className="stylist"><StylistSchedule /></div>
        </div>
        <div className="stylist col-md-6 col-12">
          <BookingDetails />
        </div>
      </div>
    </div>
  </div>
);

export default Booking;