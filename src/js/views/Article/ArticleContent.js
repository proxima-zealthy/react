import React, { Component } from 'react'
import ArticleBanner from './ArticleBanner'
import ArticleTags from './ArticleTags'
import ArticleHeading from './ArticleHeading'
import ArticleAuthor from 'components/AuthorDetails/ArticleAuthor'
import ArticleAvatar from 'components/AuthorDetails/AuthorAvatar'
import ArticleBody from './ArticleBody'
import ViewsSvg from 'svg/views.svg'
import Breadcrumbs from '../../components/Breadcrumbs'

export default class ArticleContent extends Component {
  render() {
    const data=this.props.data.content;
    const views=this.props.data.views;
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
                    <p className="right">{views}</p>
                  </div>
                </div>
                <ArticleBody body={data.body}/>
                <ArticleTags tags={data.tags} />
              
              </div>
            )
          }
        </article>
        

        {/**/}
      </div>
        
    )
  }
}
