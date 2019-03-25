import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink,Switch, Route, Link, withRouter, Redirect } from 'react-router-dom';
import routes from 'routes';
import BottomBar from 'components/BottomnavMobile'
import ArticleContent from './ArticleContent';
import { fetchArticleById } from "reducers/article";
import Whatsapp from '../../components/Actionbuttons/Whatsapp.js'
import Like from '../../components/Actionbuttons/Like'
import Share from '../../components/Actionbuttons/Share'
import Commentoverlay from '../../components/Actionbuttons/Commentoverlay'
import Breadcrumbs from '../../components/Breadcrumbs';
import AuthorDescription from './AuthorDesc'
import Tags from './Tags';
import RelatedArticles from 'components/RelatedArticles'
import 'ArticlePage.scss';
//import 'CommentBlocks.scss';


@connect(state => ({ ...state.article }), {
  fetchArticleById
})
export default class Article extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       hidden : false
    }
    this.onScrollRemoveBottomNav=this.onScrollRemoveBottomNav.bind(this);
} 
 
  static fetchData({ store, params }) {
    const articleId = params.id;
    return store.dispatch(fetchArticleById(articleId))
      .catch(err => {
        // TODO: Redirect to Not Found page for topics
        console.log('Display notification on error...', err);
      }); // Dispatch action for store passed from server
  }

   onScrollRemoveBottomNav(){
    function isScrolledIntoView(el) {
     
      var elementTop = el.offsetTop;
      var elementBottom = elementTop + el.offsetHeight;

      var viewportTop = window.pageYOffset || document.documentElement.scrollTop;
      var viewportBottom = viewportTop + window.innerHeight;
      

      //return elementBottom > viewportTop && elementTop < viewportBottom ;
      return elementTop < viewportBottom ;
    }
    var el=document.getElementById("comment-block");
    
    var getSection=isScrolledIntoView(el);
    
    if(getSection ){
      this.setState({hidden:true});
    }
    else{
      this.setState({hidden:false});
    }  

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
   

    window.addEventListener('scroll',this.onScrollRemoveBottomNav)
   
  }

  componentWillUnmount(){
    window.removeEventListener('scroll',this.onScrollRemoveBottomNav);
  }

  render() {
    const {loading, error } = this.props;
    const articleData=this.props.data
    
    const ArticleId = this.props.match.params.id;
    const comments=articleData.comments;
    const baseRouteWithArticleId = routes.ARTICLE.path.replace(':id', ArticleId);
    const BreadcrumbsItems=[ {"id":1, "name": "Skin"},{"id":2, "name": "Acne"},{"id":3, "name": "the article "}];
    return (
      <div>
        <Breadcrumbs items={ BreadcrumbsItems }/>
        {/* the body of article  */}

        <ArticleContent data={ articleData }/>
        {/*here goes the footer overlay section inside the pagecontent */}
        <BottomBar isStatic={true}>
              <Commentoverlay/>
              <Like/>
              <Share/>
              <Whatsapp/>
        </BottomBar>
        {/*the latest comments area inside article page  */}

        <div id="comment-block"className="comment-block">
          <ul>
            {comments.map(( comment )=>(
                <li key={ comment.id }>
                  <p><span>{ comment.user }</span>:<span>{ comment.text }</span></p>
                </li>
            ))}  
          </ul> 
          <NavLink to={ routes.COMMENTS.path }>
            <div style={{ width:'100%' }}>
              <button style={{ width:'inherit' }}>show all comments</button>
            </div> 
          </NavLink>
        </div>
        <AuthorDescription/>
        
        <Tags tags={ articleData.content.tags } />
        {/*<RelatedArticles feeds={ feedData }/>*/}
        {/*bottom footer area as overlay */}
          <BottomBar controllerClass={ this.state.hidden }>
              <Commentoverlay/>
              <Like/>
              <Share/>
              <Whatsapp/>
          </BottomBar> 
      </div>
      
    )
  }
}
