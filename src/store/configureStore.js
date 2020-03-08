import { createStore, combineReducers } from 'redux';
import newsReducer from '../reducers/news';
import authReducer from '../reducers/auth';

import bookingReducer from '../reducers/booking';


export default () => {

  const rootReducer = combineReducers({
    news: newsReducer,
    auth: authReducer,
    booking: bookingReducer
  });

  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};