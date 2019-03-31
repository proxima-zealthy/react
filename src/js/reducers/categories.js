import MOCKAPI from 'mock-api';
import mockCategoriesData from 'mock-api/categories';

const GET_CATEGORIES = 'GET_CATEGORIES';


export function fetchAllCategories( ) {
  return {
    type: GET_CATEGORIES,
    payload: MOCKAPI(mockCategoriesData( )) // Promise based redux example
  };
}

const initialState = {
  loading: false,
  error: null,
  data: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case `${GET_CATEGORIES}::PENDING`:
      return {
        ...initialState,
        loading: true
      };

    case `${GET_CATEGORIES}::ERROR`:
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };

    case `${GET_CATEGORIES}::SUCCESS`:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    
    default:
      return state;
  }
}
