import { GET_SCORE, ADD_SCORE, EDIT_SCORE} from '../constants/ActionTypes';

const initialState = [];

export default function score(state = initialState, action) {
  switch (action.type) {

  case GET_SCORE:
    return [...action.score];

  case ADD_SCORE:
    return [...state, action.score];

  case EDIT_SCORE:
    return state.map(que =>
      score.id === action.score.id ? action.score : score
    );
  default:
    return state;
  }
}
