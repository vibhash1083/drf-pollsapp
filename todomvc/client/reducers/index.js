import { combineReducers } from 'redux';
import todos from './todos';
import ques from './ques';

const rootReducer = combineReducers({

  ques
});

export default rootReducer;
