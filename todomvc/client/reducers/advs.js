import { GET_ADS, ADD_AD} from '../constants/ActionTypes';

const initialState = [];

export default function advs(state = initialState, action) {
  switch (action.type) {

  case GET_ADS:
    return [...action.advs];

  case ADD_AD:
    return [...state, action.adv];

  default:
    return state;
  }
}
