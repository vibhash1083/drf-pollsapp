import { GET_ADS, ADD_AD} from '../constants/ActionTypes';

const initialState = [];

export default function ads(state = initialState, action) {
  switch (action.type) {

  case GET_ADS:
    return [...action.ads];

  case ADD_AD:
    return [...state, action.ad];

  default:
    return state;
  }
}
