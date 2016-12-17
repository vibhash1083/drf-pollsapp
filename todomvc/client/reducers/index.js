import { combineReducers } from 'redux';
import ques from './ques';
import score from './score';


const rootReducer = combineReducers({
  ques,
  score
});

export default rootReducer;
