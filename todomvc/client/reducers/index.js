import { combineReducers } from 'redux';
import todos from './todos';
import ques from './ques';

const rootReducer = combineReducers({
  todos,
  ques
});

export default rootReducer;
