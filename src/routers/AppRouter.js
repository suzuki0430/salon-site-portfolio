import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Cover from '../components/Cover';
import Footer from '../components/Footer';
import HomePage from '../components/HomePage';
import BookingPage from '../components/BookingPage';
import ServiceListPage from '../components/ServiceListPage';
import NewsPage from '../components/Newspage';
import ContactPage from '../components/ContactPage';
// import GoogleApiWrapper from '../components/ContactPage';
import BookingComplete from '../components/BookingComplete';
import AddNews from '../components/AddNews';
// import RegisterNews from '../components/RegisterNews';
import NotFoundPage from '../components/NotFoundPage';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Cover />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/booking" component={BookingPage} />
        <Route path="/servicelist" component={ServiceListPage} />
        <Route path="/news" component={NewsPage} />
        <Route path="/addnews" component={AddNews} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/bookingcomplete" component={BookingComplete} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;