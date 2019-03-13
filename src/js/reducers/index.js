import { combineReducers } from 'redux';
import counter from 'reducers/counter';
import member from 'reducers/members';
import topic from 'reducers/topic';
import article from 'reducers/article';
import feeds from 'reducers/feeds'

export default combineReducers({
  counter,
  member,
  topic,
  article,
  feeds
});
