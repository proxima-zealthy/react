import MOCKAPI from 'mock-api';
import mockArticleData,{ removeCommentById }  from 'mock-api/article';

const GET_COMMENTS = 'GET_COMMENTS';
const ADD_COMMENT='ADD_COMMENT';
const REMOVE_COMMENT='REMOVE_COMMENT';



export function fetchCommentsByArticleId(id) {
  return {
    type: GET_COMMENTS,
    payload: MOCKAPI(mockArticleData(id)) // Promise based redux example
  };
}
export function removeCommentByEntityId(id){
  return {
    type: REMOVE_COMMENT,
    payload: MOCKAPI(removeCommentById(id))
  }
}

const initialState = {
  loading: false,
  error: null,
  data: null,

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
    case `${REMOVE_COMMENT}::PENDING`:
      return {
        ...initialState,
        loading: true
      };
    case `${REMOVE_COMMENT}::SUCCESS`:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case `${REMOVE_COMMENT}::ERROR`:
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };

  
    default:
      return state;
  }
}