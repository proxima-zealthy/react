import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Switch, Route, Link, withRouter, Redirect } from 'react-router-dom';
import routes from 'routes';
import Footer from 'components/BottomnavMobile'
import Comments from   'components/Comments'
import ArticleContent from './ArticleContent';
import { fetchArticleById } from "reducers/article";
import 'ArticlePage.scss';
import 'CommentBlocks.scss'

@connect(state => ({ ...state.article }), {
  fetchArticleById
})
export default class Article extends Component {
  state = {
    bottomnav : true
  };

  static fetchData({ store, params }) {
    const articleId = params.id;

    return store.dispatch(fetchArticleById(articleId))
      .catch(err => {
        // TODO: Redirect to Not Found page for topics
        console.log('Display notification on error...', err);
      }); // Dispatch action for store passed from server
  }

  componentDidMount() {
    // Check if data already exits from server side state
    if (!this.props.data) {
      const articleId = this.props.match.params.id;

      this.props.fetchArticleById(articleId)
        .then(res => {
          console.log('Promise chain...', res);
        })
        .catch(err => {
          // TODO: Redirect to Not Found page for topics
          console.log('Display notification on error...', err);
        });
    }

    window.addEventListener('scroll',()=>{
      const isTop=window.scrollY> 715;
      //console.log(window.scrollY)
      if(isTop !== true){
        this.setState({bottomnav:true});
      }else{
        this.setState({bottomnav:false});
      }
    })
  }

  componentWillUnmount(){
    window.removeEventListener('scroll');
  }

  render() {
    const {loading, error } = this.props;
    const data=this.props.data
    const ArticleId = this.props.match.params.id;
    const baseRouteWithArticleId = routes.ARTICLE.path.replace(':id', ArticleId);
    return (
      <div>
        {/* the body of article  */}

        <Switch>
          <Route exact path={`${ baseRouteWithArticleId}`} component={()=> <ArticleContent data={data}/>} />
          <Route exact path={`${ baseRouteWithArticleId}/comments`} component={ Comments } />
        </Switch>
        
        <div>
          <Link to={`${baseRouteWithArticleId}/comments`}>Show comments</Link>
        </div>
        {/*bottom footer area */}
        <div className={this.state.bottomnav?'bottomnav':'bottomnavdisabled'} style={{paddingTop:'60px'}}><Footer/></div>
      </div>
      
    )
  }
}
