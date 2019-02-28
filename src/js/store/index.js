import { createStore, applyMiddleware } from 'redux';
import apiAsyncMiddleware from './apiAsyncMiddleware';
import rootReducer from 'reducers';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

let initialState = {};

try {
  // Rehydarate store from server state
  if (typeof window !== 'undefined' && window.__PRELOADED_STATE__) {
    // Sanitizing data to prevent XSS attacks
    initialState = JSON.parse(window.__PRELOADED_STATE__.replace(/>/g, '\\u003e').replace(/</g, '\\u003c'));

    delete window.__PRELOADED_STATE__;
  }
} catch (e) {
  // If error, ignore dehydrated state for graceful degradation
}

// Create store
export default () => {
  let store = null;
  // Create store
  // with initial state if it exists
  store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(apiAsyncMiddleware)
  );

  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  // Return store only
  // But as an object for consistency
  return {
    store,
  };
};
