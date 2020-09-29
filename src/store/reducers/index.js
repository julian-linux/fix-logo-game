import userStore from './user';
import { combineReducers } from 'redux';

const rootReducer = () =>
  combineReducers({
    userStore,
  });

export default rootReducer;
