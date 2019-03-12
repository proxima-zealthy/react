import React, { Component } from 'react'
import { connect } from 'react-redux';
import ArticleBanner from './ArticleBanner'
import ArticleTags from './ArticleTags'
import ArticleHeading from './ArticleHeading'
import ArticleAuthor from 'components/AuthorDetails/ArticleAuthor'
import ArticleAvatar from 'components/AuthorDetails/AuthorAvatar'
import ArticleBody from './ArticleBody'
import Breadcrumbs from '../../components/Breadcrumbs'
import Footer from 'components/BottomnavMobile'
import ViewsSvg from 'svg/views.svg'
import CommentBlock from   'components/CommentBlock/CommentBlock'
import { fetchArticleById } from "reducers/article";
import 'ArticlePage.scss';


@connect(state => ({ ...state.topic }), {
  fetchArticleById
})
export default class Article extends Component {
  state = {
    articleArray:[],
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
          //here sometimes its coming some times not ,so there must be problem in serverside  .. .........Aseem 
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
    const { data, loading, error } = this.props;
    console.log(this.props)
   

    return (
      <div className="Article-container">
        {/**/}
        <article>
          {
            data && (
              <div className="article">
                <Breadcrumbs/>
                <ArticleBanner image={data.image} />

                <ArticleHeading title={data.title}/>
                <div className="Authordetails-Area">
                  <div className="author">
                    <p className="AuthorAvatar"><ArticleAvatar/></p>
                    <p className="AuthorName"><ArticleAuthor/></p>
                  </div>

                  <div className="views">
                    <p className="left"><ViewsSvg/></p>
                    <p className="right">12k</p>
                  </div>
                </div>
                <ArticleBody body={data.body}/>
                <ArticleTags tags={data.tags} />
                <div style={{paddingBottom:'60px'}}>
                  <CommentBlock/>
                </div>
              </div>
            )
          }
        </article>

        {/**/}
        
        <div className={this.state.bottomnav?'bottomnav':'bottomnavdisabled'}><Footer/></div>
      </div>

    )
  }
}
