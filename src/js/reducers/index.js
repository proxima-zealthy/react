import { combineReducers } from 'redux';
import counter from 'reducers/counter';
import member from 'reducers/members';
import topic from 'reducers/topic';
import article from 'reducers/article';
import feeds from 'reducers/feeds';
import comments from 'reducers/comments';
import categories from 'reducers/categories';

export default combineReducers({
  counter,
  member,
  topic,
  article,
  feeds,
  comments,
  categories
});
