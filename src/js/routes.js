import Home from 'views/Home';
import Dummy_Member from 'views/Examples/Members';
import Dummy_Counter from 'views/Examples/Counter';
import Article from "views/articlePage/ArticlePage";
import Topic from 'views/Topics/Topic'
import About from 'views/Topics/About/About'


export const publicPath = '/';

export default {
  HOME: {
    path: publicPath,
    component: Home
  },
  TOPIC:{
    path: `${ publicPath }topic`,
    component: Topic
  },
  ABOUT:{
    path: `${ publicPath }about`,
    component: About
  },
  ARTICLE: {
    /*
    * Example route1: /article/acne
    * Example route2: /article/diabetes
    * Example route2: /article
    * Inside Article, use `this.props.location.match.params.article_name` and value will be "acne", or "diabetes" or undefined"
    * */
    path: `${ publicPath }article/:article_name`,
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
};
