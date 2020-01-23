  import React from 'react';
  import Facebook from '../images/iconfinder_facebook_circle_color_107175.png';
  import Twitter from '../images/iconfinder_twitter_circle_color_107170.png';
  import Youtube from '../images/iconfinder_youtube_circle_color_107167.png';
  import { NavLink } from 'react-router-dom';

  const Footer = () => (
    <footer className="footer">
      <div className="container">
        <div className="footer__content row">
          <div className="footer__box col-12 col-md-6">
            <h3>ソーシャルメディア</h3>
            <ul>
              <li><img src={Facebook} alt="facebook" />  Facebook</li>
              <li><img src={Twitter} alt="twitter" />  Twitter</li>
              <li><img src={Youtube} alt="youtube" />  Youtube</li>
            </ul>
          </div>
          <div className="footer__box col-12 col-md-6">
            <h3>メールマガジン</h3>
            <p>登録はこちらからお願いします。</p>
            <form>
              <div className="form-group">
                <input type="text" className="form-control" name="newsletter" placeholder="メールアドレス"/>
              </div>
              <button type="submit" className="btn btn-light">送信</button>
            </form>
          </div>
        </div>
        <div className="footer__navigation">
          <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
          <NavLink to="/booking" activeClassName="is-active">Booking</NavLink>
          <NavLink to="/servicelist" activeClassName="is-active">Service List</NavLink>
          <NavLink to="/news" activeClassName="is-active">News</NavLink>
          <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
        </div>
        <small>&copy; 2019 SALON STYLETTO</small>
      </div>
    </footer>
  );

  export default Footer;
