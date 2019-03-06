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

//import Data from '../../mock-api/ArticleData.json'


export class ArticlePage extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           articleArray:[]
        }
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
            <Breadcrumbs/>
            <ArticleBanner image={bannerimage} />
            
            <ArticleHeading title={articletitle}/>
            <div className="Authordetails-Area">
                <div className="AuthorAvatar"><ArticleAvatar/></div>
                <div className="AuthorName"><ArticleAuthor/></div>
                <div className="views"><p><span><ViewsSvg/></span><span>12k</span></p></div>
            </div>
            <ArticleBody body={articlebody}/>
            <ArticleTags/>
        

            

          
            </div>
            </article>
            <div>
                <CommentBox/>
            </div>
            <div><ButtomNav/></div>
        </div>
        </div>
   
    )
  }
}

export default ArticlePage
