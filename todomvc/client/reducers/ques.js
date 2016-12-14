import { GET_QUES, ADD_QUES} from '../constants/ActionTypes';

const initialState = [];

export default function ques(state = initialState, action) {
  switch (action.type) {

  case GET_QUES:
    return [...action.ques];

  case ADD_QUES:
    return [...state, action.addQues];

  default:
    return state;
  }
}
