import MOCKAPI from 'mock-api';
import mockTopicData from 'mock-api/topics';

const GET_TOPIC = 'GET_TOPIC';

export function fetchTopicById(id) {
  return {
    type: GET_TOPIC,
    payload: MOCKAPI(mockTopicData(id)) // Promise based redux example
  };
}

const initialState = {
  loading: false,
  error: null,
  data: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case `${GET_TOPIC}::PENDING`:
      return {
        ...initialState,
        loading: true
      };

    case `${GET_TOPIC}::ERROR`:
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };

    case `${GET_TOPIC}::SUCCESS`:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    default:
      return state;
  }
}
