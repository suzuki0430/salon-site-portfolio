import React from 'react';
import { Link } from 'react-router-dom';

const BookingComplete = () => (
  <div className="booking_complete">
    <div className="container">
      <h1>予約完了</h1>
      <Link to="/" className="">HOMEに戻る</Link>  
    </div>
  </div>
);

export default BookingComplete;