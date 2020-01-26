import React from 'react';
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const ReserveForm = () => (
  <div className="reserve-content">
    <h2>予約確認フォーム</h2>
    <div className="reserve-content__box">
      <form>
        <div className="form-group">
          <label for="exampleInputEmail">メールアドレス</label>
          <input type="email" className="form-control form-control-lg" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="メールアドレス"/>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
        <div className="form-group">
          <label for="exampleInputPassword">パスワード</label>
          <input type="password" className="form-control form-control-lg" id="exampleInputPassword" placeholder="パスワード"/>
        </div>
        <button type="submit" className="btn btn-primary btn-lg btn-block">ログイン</button>
      </form>
      <Link to="/booking" activeClassName="is-active" className="booking">予約はこちら</Link>
    </div>
  </div>
);

export default ReserveForm;