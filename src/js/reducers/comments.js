import MOCKAPI from 'mock-api';
import mockArticleData from 'mock-api/article';

const GET_COMMENTS = 'GET_COMMENTS';
const ADD_COMMENT='ADD_COMMENT';

function addComment(){
  return {
    type: ADD_COMMENT,
  };
}
export function fetchCommentsById(id) {
  //console.log(MOCKAPI(mockArticleData(id)));here the payload returns the id and content
  return {
    type: GET_COMMENTS,
    payload: MOCKAPI(mockArticleData(id)) // Promise based redux example
  };
}

const initialState = {
  loading: false,
  error: null,
  data: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case `${GET_COMMENTS}::PENDING`:
      return {
        ...initialState,
        loading: true
      };

    case `${GET_COMMENTS}::ERROR`:
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };

    case `${GET_COMMENTS}::SUCCESS`:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    default:
      return state;
  }
}
