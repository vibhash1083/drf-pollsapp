import { combineReducers } from 'redux';
import todos from './todos';
import ads from './ads';

const rootReducer = combineReducers({
  todos,
  ads
});

export default rootReducer;
