import React from 'react';
import Facebook from '../images/iconfinder_facebook_circle_color_107175.png';
import Twitter from '../images/iconfinder_twitter_circle_color_107170.png';
import Youtube from '../images/iconfinder_youtube_circle_color_107167.png';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__content row">
        <div className="footer__box col-12 col-md-6">
          <h3>ソーシャルメディア</h3>
          <div className="footer__social">
            <button className="social big ui facebook button">
              <i className="facebook icon"></i>
              Facebook
            </button>
            <button className="social big ui twitter button">
              <i className="twitter icon"></i>
              Twitter
            </button>
            <button className="social big ui youtube button">
              <i className="youtube icon"></i>
              YouTube
            </button>
          </div>
        </div>
        <div className="footer__box col-12 col-md-6">
          <h3>メールマガジン</h3>
          <p>登録はこちらからお願いします。</p>
          <form>
            <div className="input-group">
              <input type="text" className="form-control form-control-lg" name="newsletter" placeholder="メールアドレス"/>
              <span className="input-group-btn">
                <button type="submit" className="btn btn-light btn-lg">送信</button>
              </span>
            </div>
          </form>
        </div>
      </div>
      <div className="footer__navigation">
        <LinkContainer to="/" activeClassName="is-active" exact={true}>
          <NavItem className="footer_link">Home</NavItem>
        </LinkContainer>
        <LinkContainer to="/booking" activeClassName="is-active">
          <NavItem className="footer_link">Booking</NavItem>
        </LinkContainer>
        <LinkContainer to="/news" activeClassName="is-active">
          <NavItem className="footer_link">News</NavItem>
        </LinkContainer>
        <LinkContainer to="/contact" activeClassName="is-active">
          <NavItem className="footer_link">Contact</NavItem>
        </LinkContainer>
      </div>
      <small>&copy; 2019 SALON STYLETTO</small>
    </div>
  </footer>
);

export default Footer;


// <ul>
// <li><img src={Facebook} alt="facebook" />  Facebook</li>
// <li><img src={Twitter} alt="twitter" />  Twitter</li>
// <li><img src={Youtube} alt="youtube" />  Youtube</li>
// </ul>