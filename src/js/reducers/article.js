import MOCKAPI from 'mock-api';
import mockArticleData from 'mock-api/article';
import mockFeedsData from 'mock-api/feeds';

const GET_ARTICLE = 'GET_ARTICLE';
const GET_RELATEDARTICLES = 'GET_RELATEDARTICLES';
const GET_RELATEDVIDEOS = 'GET_RELATEDVIDEOS';

export function fetchArticleById(id) {
  console.log(MOCKAPI(mockArticleData(id)));//here the payload returns the id and content
  return {
    type: GET_ARTICLE,
    payload: MOCKAPI(mockArticleData(id)) // Promise based redux example
  };
}
export function fetchRelatedArticles() {
  return {
    type: GET_RELATEDARTICLES,
    payload: MOCKAPI(mockFeedsData()) // Promise based redux example
    
  };
}
export function fetchRelatedVideos(){
  return {
    type: GET_RELATEDVIDEOS,
    payload: MOCKAPI(mockFeedsData())
  }
}

const initialState = {
  loading: false,
  error: null,
  data: null,
  relatedArticleData:null,
  relatedVideosData:null
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
    case `${GET_RELATEDARTICLES}::PENDING`:
      return {
        ...initialState,
        loading: true
      };

    case `${GET_RELATEDARTICLES}::ERROR`:
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };

    case `${GET_RELATEDARTICLES}::SUCCESS`:
      return {
        ...state,
        loading: false,
        relatedArticleData: action.payload,
      };
    case `${GET_RELATEDVIDEOS}::PENDING`:
      return {
        ...initialState,
        loading: true
      };

    case `${GET_RELATEDVIDEOS}::ERROR`:
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };

    case `${GET_RELATEDVIDEOS}::SUCCESS`:
      return {
        ...state,
        loading: false,
        relatedVideosData: action.payload,
      };
      

    default:
      return state;
  }
}
