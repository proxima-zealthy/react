import { combineReducers } from 'redux';
import counter from 'reducers/counter';
import member from 'reducers/members';
import topic from 'reducers/topic';
import article from 'reducers/article';

export default combineReducers({
  counter,
  member,
  topic,
  article,
});
