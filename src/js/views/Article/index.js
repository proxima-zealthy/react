import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink,Switch, Route, Link, withRouter, Redirect } from 'react-router-dom';
import routes from 'routes';
import Footer from 'components/BottomnavMobile'
import ArticleContent from './ArticleContent';
import { fetchArticleById } from "reducers/article";
import 'ArticlePage.scss';
import 'CommentBlocks.scss'

@connect(state => ({ ...state.article }), {
  fetchArticleById
})
export default class Article extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       bottomnav : true
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

      return elementBottom > viewportTop && elementTop < viewportBottom;
    }
    var el=document.getElementById("comment-block");
    
    var data=isScrolledIntoView(el);
    if(data){
      //console.log("i can find u",data)
      this.setState({bottomnav:false});
      window.innerHeight=window.innerHeight-60;
    }
    else{
      //console.log("you are gone ",data)
      this.setState({bottomnav:true});
      window.innerHeight=window.innerHeight+60;
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
    return (
      <div>
        {/* the body of article  */}

        <ArticleContent data={ articleData }/>
        <div id="comment-block"className="comment-block">
          <ul>
            {comments.map(( comment )=>(
                <li key={comment.id}>
                  <p><span>{ comment.user }</span><span>{ comment.text }</span></p>
                </li>
            ))}  
          </ul> 
          <NavLink to="/article/id/comments">
            <div style={{ width:'100%' }}>
              <button style={{ width:'inherit' }}>show all comments</button>
            </div> 
          </NavLink>
        </div>
        <ArticleContent data={ articleData }/>
        {/*bottom footer area */}
        <div className={this.state.bottomnav?'bottomnav':'bottomnavdisabled'} style={{paddingTop:'60px'}}><Footer/></div>
      </div>
      
    )
  }
}
