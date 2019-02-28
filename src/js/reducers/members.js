import API from 'utils/api';

const GET_MEMBERS = 'GET_MEMBERS';

export function fetchMember() {
  return {
    type: GET_MEMBERS,
    payload: API('https://swapi.co/api/people/') // Promise based redux example
  };
}

const initialState = {
  loading: false,
  error: null,
  list: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case `${GET_MEMBERS}::PENDING`:
      return {
        ...initialState,
        loading: true
      };

    case `${GET_MEMBERS}::ERROR`:
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };

    case `${GET_MEMBERS}::SUCCESS`:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };

    default:
      return state;
  }
}
