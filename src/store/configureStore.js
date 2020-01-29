import { createStore, combineReducers } from 'redux';
import newsReducer from '../reducers/news';

export default () => {

  const rootReducer = combineReducers({
    news: newsReducer
  });

  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};