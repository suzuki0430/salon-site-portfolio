import { createStore, combineReducers } from 'redux';
import newsReducer from '../reducers/news';
import authReducer from '../reducers/auth';

export default () => {

  const rootReducer = combineReducers({
    news: newsReducer,
    auth: authReducer
  });

  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};