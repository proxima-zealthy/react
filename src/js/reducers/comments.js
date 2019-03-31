import MOCKAPI from 'mock-api';
import mockArticleData,{ removeCommentById,addComment}  from 'mock-api/article';

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
export function addCommenttoList(comment){
  return{
    type:ADD_COMMENT,
    payload:MOCKAPI(addComment(comment))
  }
}

const initialState = {
  loading: false,
  error: null,
  comments:null,
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
      case `${ADD_COMMENT}::PENDING`:
      return {
        ...initialState,
        loading: true
      };

    case `${ADD_COMMENT}::ERROR`:
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };

    case `${ADD_COMMENT}::SUCCESS`:
      return {
        ...state,
        loading: false,
        comments: action.payload,
      };

  
    default:
      return state;
  }
}