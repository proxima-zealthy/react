import { combineReducers } from 'redux';
import counter from 'reducers/counter';
import member from 'reducers/members';

export default combineReducers({
  counter,
  member,
});
