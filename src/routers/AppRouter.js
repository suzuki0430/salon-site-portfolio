import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
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
import EditNews from '../components/EditNews';
// import RegisterNews from '../components/RegisterNews';
import NotFoundPage from '../components/NotFoundPage';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Cover />
      <Switch>
        <Route path="/" component={withRouter(HomePage)} exact={true} />
        <Route path="/booking" component={withRouter(BookingPage)} />
        <Route path="/servicelist" component={withRouter(ServiceListPage)} />
        <Route path="/news" component={withRouter(NewsPage)} />
        <Route path="/addnews" component={withRouter(AddNews)} />
        <Route path="/editnews/:id" component={withRouter(EditNews)} />
        <Route path="/contact" component={withRouter(ContactPage)} />
        <Route path="/bookingcomplete" component={withRouter(BookingComplete)} />
        <Route component={withRouter(NotFoundPage)} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;