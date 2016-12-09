import { combineReducers } from 'redux';
import todos from './todos';
import advs from './advs';

const rootReducer = combineReducers({
  todos,
  advs
});

export default rootReducer;
