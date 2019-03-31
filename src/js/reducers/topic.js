import MOCKAPI from 'mock-api';
import mockTopicData ,{ qaByQuestionId } from 'mock-api/topics';

const GET_TOPIC = 'GET_TOPIC';
const GET_QA = 'GET_QA';

export function fetchTopicById(id) {
  return {
    type: GET_TOPIC,
    payload: MOCKAPI(mockTopicData(id)) // Promise based redux example
  };
}

export function fetchQAByQustionId(id){
  return {
    type:GET_QA,
    payload: MOCKAPI(qaByQuestionId(id))
  }
}

const initialState = {
  loading: false,
  error: null,
  data: null,
  qaById:null
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
      case `${GET_QA}::PENDING`:
      return {
        ...initialState,
        loading: true
      };

    case `${GET_QA}::ERROR`:
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };

    case `${GET_QA}::SUCCESS`:
      return {
        ...state,
        loading: false,
        qaById: action.payload,
      };

    default:
      return state;
  }
}
