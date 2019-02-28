const INCREMENT = 'INCREMENT';

export function increment() {
  return {
    type: INCREMENT,
  };
}

const initialState = {
  counter: 0,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case `${INCREMENT}`:
      return {
        counter: state.counter + 1
      };

    default:
      return state;
  }
}
