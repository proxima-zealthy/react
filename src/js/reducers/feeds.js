import MOCKAPI from 'mock-api';
import mockFeedData from 'mock-api/feeds';

const GET_FEEDS= 'GET_FEEDS';

export function fetchAllFeeds() {
  return {
    type: GET_FEEDS,
    payload: MOCKAPI(mockFeedData()) // Promise based redux example
    
  };
}

const initialState = {
  loading: false,
  error: null,
  data: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case `${GET_FEEDS}::PENDING`:
      return {
        ...initialState,
        loading: true
      };

    case `${GET_FEEDS}::ERROR`:
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };

    case `${GET_FEEDS}::SUCCESS`:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    default:
      return state;
  }
}
