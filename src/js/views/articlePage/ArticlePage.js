import React, { Component } from 'react'
import 'ArticlePage.scss'
import CommentBox from '../../components/commentBox/CommentBox.js'
import ArticleBanner from '../../components/article/ArticleBanner'
import ArticleTags from '../../components/article/ArticleTags'
import ArticleHeading from '../../components/article/ArticleHeading'
import ArticleAuthor from '../../components/article/AuthorDetails/ArticleAuthor'
import ArticleAvatar from '../../components/article/AuthorDetails/AuthorAvatar'
import ArticleBody from '../../components/article/ArticleBody'
import Breadcrumbs from '../../components/Breadcrumbs'
import ArticleData from '../../mock-api/ArticleData.json'
import Navigation from '../navigation/Navigation'
import ButtomNav from '../../components/footerMobile/ButtomNav'
import ViewsSvg from 'svg/views.svg'
import CommentBlock from   '../../components/CommentBlock/CommentBlock' 

//import Data from '../../mock-api/ArticleData.json'


export class ArticlePage extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           articleArray:[],
           bottomnav : true
        }
    } 
    componentDidMount() {
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
    const article=ArticleData.map((articleArray,index)=>{return articleArray})
    //console.log(this.props.match.params.article_name)
    const articleName= this.props.match.params.article_name
   // console.log(typeof articleName)//its  a string 
    const bannerimage= article[1].articleimage
    const articletags= article[1].articletags
    const articletitle=article[1].articletitle
    const articlebody=article[1].articlebody

    //console.log(topicNAme)
    return (
        <div className="articlepage">
        <Navigation/>
        <div className="article-container">
            <article>
            <div className="article">
            <div><Breadcrumbs/></div>
            <ArticleBanner image={bannerimage} />
            
            <ArticleHeading title={articletitle}/>
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
            <ArticleBody body={articlebody}/>
            <ArticleTags/>
        

            

          
            </div>
            </article>
            <div style={{paddingBottom:'60px'}}>
                <CommentBlock/>
            </div>
            <div className={this.state.bottomnav?'bottomnav':'bottomnavdisabled'}><ButtomNav/></div>
        </div>
        </div>
   
    )
  }
}

export default ArticlePage
