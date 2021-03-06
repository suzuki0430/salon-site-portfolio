import React from 'react';
// import { Link } from 'react-router-dom'; 
import { NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const ReserveForm = () => (
  <div className="reserve-content">
    <div className="container">
      <h1 className="border-bottom">予約確認フォーム</h1>
      <div className="reserve-content__box">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail">メールアドレス</label>
            <input type="email" className="form-control form-control-lg" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="メールアドレス"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword">パスワード</label>
            <input type="password" className="form-control form-control-lg" id="exampleInputPassword" placeholder="パスワード"/>
          </div>
          <button type="submit" className="btn btn-primary btn-lg btn-block">ログイン</button>
        </form>
        <LinkContainer to="/booking" activeClassName="is-active" className="booking">
          <NavItem className="link_booking">予約はこちら</NavItem>
        </LinkContainer>
      </div>
    </div>
  </div>
);

export default ReserveForm;


