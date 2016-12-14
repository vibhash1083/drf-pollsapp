import { GET_ADS, ADD_AD} from '../constants/ActionTypes';

const initialState = [];

export default function ques(state = initialState, action) {
  switch (action.type) {

  case GET_ADS:
    return [...action.ques];

  case ADD_AD:
    return [...state, action.que];

  default:
    return state;
  }
}
