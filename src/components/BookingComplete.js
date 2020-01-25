import React from 'react';
import { Link } from 'react-router-dom';

const BookingComplete = () => (
  <div className="container">
    <h1>予約完了</h1>
    <Link to="/booking" activeClassName="is-active" className="booking">Bookingに戻る</Link>  
  </div>
);

export default BookingComplete;