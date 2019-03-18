import Home from 'views/Home';
import Dummy_Member from 'views/Examples/Members';
import Dummy_Counter from 'views/Examples/Counter';
import Article from "views/Article";
import Topics from 'views/Topics'
import ScrollTest from 'views/ScrollTest'
import Comments from 'views/Comments'


export const publicPath = '/';

export default {
  HOME: {
    path: publicPath,
    component: Home
  },
  TEST:{
    path: `${ publicPath }test`,
    component: ScrollTest
  },
  TOPIC:{
    path: `${ publicPath }topics/:id`,
    component: Topics
  },
  ARTICLE: {
    /*
    * Example route1: /article/acne
    * Example route2: /article/diabetes
    * Example route2: /article
    * Inside Article, use `this.props.location.match.params.article_name` and value will be "acne", or "diabetes" or undefined"
    * */
    path: `${ publicPath }article/:id`,
    component: Article
  },
  COUNTER: {
    path: `${ publicPath }counter`,
    component: Dummy_Counter
  },
  MEMBERS: {
    path: `${ publicPath }members`,
    component: Dummy_Member
  },
  COMMENTS: {
    path: `${ publicPath }article/:id/comments`,
    component: Comments
  }
};
