import MOCKAPI from 'mock-api';
import mockArticleData from 'mock-api/article';

const GET_ARTICLE = 'GET_ARTICLE';

export function fetchArticleById(id) {
  //console.log(MOCKAPI(mockArticleData(id)));here the payload returns the id and content
  return {
    type: GET_ARTICLE,
    payload: MOCKAPI(mockArticleData(id)) // Promise based redux example
  };
}console.log()

const initialState = {
  loading: false,
  error: null,
  data: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case `${GET_ARTICLE}::PENDING`:
      return {
        ...initialState,
        loading: true
      };

    case `${GET_ARTICLE}::ERROR`:
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };

    case `${GET_ARTICLE}::SUCCESS`:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    default:
      return state;
  }
}
