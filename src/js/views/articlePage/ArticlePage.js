import React, { Component } from 'react'
import 'ArticlePage.scss'
import CommentBox from '../../components/commentBox/CommentBox.js'
import ArticleBanner from '../../components/article/ArticleBanner'
import ArticleTags from '../../components/article/ArticleTags'
import ArticleHeading from '../../components/article/ArticleHeading'
import ArticleBody from '../../components/article/ArticleBody'
import Breadcrumbs from '../../components/Breadcrumbs'
import ArticleData from '../../mock-api/ArticleData.json'
import Navigation from '../navigation/Navigation'
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
            <ArticleBanner image={bannerimage} />
            <Breadcrumbs/>
            <ArticleHeading title={articletitle}/>
            <ArticleBody body={articlebody}/>
            <ArticleTags/>
            

          
            </div>
            </article>
            <div>
                <CommentBox/>
            </div>
        </div>
        </div>
   
    )
  }
}

export default ArticlePage
