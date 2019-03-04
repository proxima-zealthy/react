import React, { Component } from 'react'
import ArticleData from '../../../../mock-api/ArticleData.json'

export class SubTopic extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         articleArray:[]
      }
    }
    
  render() {
      const article=ArticleData.map((articleArray,index)=>{return articleArray})
      //console.log(article[1].id)
      //console.log(this.props)
      const topicNAme=this.props.topic
      console.log(topicNAme)
    return (
        
     
        <div className="container">
            <article>
            <div className="article">
                <div className="article-banner">
                    <img className="article-banner-image" src={article[topicNAme].articleimage} alt="article bannerimage"></img>
                </div>
                <div className="article-tags">
                        <a href="/"><p>tag1</p></a>
                        
                        
                </div>
               <div className="article-header" >
                    <h1 className="article-heading">{article[topicNAme].articletitle}</h1>
                    <p className="article-author">{article[topicNAme].author}</p>
                    
               </div>

               <div className="article-body">

               <p>
               {article[topicNAme].articlebody}   
               </p>
               
               </div>

            </div>
            </article>
            <div>
               
            </div>
        </div>
    )
  }
}

export default SubTopic
