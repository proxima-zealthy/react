import React, { Component } from 'react';
import ArticleBanner from './ArticleBanner';
import ArticleQuickBites from './ArticleQuickBites';
import ArticleSectionList from './ArticleSectionList'
import ArticleTags from './ArticleTags';
import ArticleHeading from './ArticleHeading';
import ArticleAuthor from 'components/AuthorDetails/ArticleAuthor';
import ArticleAvatar from 'components/AuthorDetails/AuthorAvatar';
import ArticleBody from './ArticleBody';
import ViewsSvg from 'svg/views.svg';


export default class ArticleContent extends Component {
  render() {
    const article=this.props.data.content;
    const views=this.props.data.views;
    return (
      <div className="Article-container">
        {/**/}
        <article>
          {
            article && (
              <div className="article">
                <ArticleBanner image={ article.image } />

                <ArticleHeading title={ article.title }/>
                {/*auther section */}
                <div className="Authordetails-Area">
                  <div className="author">
                      <p className="AuthorAvatar"><ArticleAvatar/></p>
                      <p className="AuthorName"><ArticleAuthor/></p>
                  </div>
                  <div className="views">
                      <p className="left"><ViewsSvg/></p>
                      <p className="right">{ views }</p>
                  </div>
                </div>
                <hr className="hr-line" ></hr>
                <ArticleQuickBites/>
                {/*article introduction  */}
                <div className="Article-intro-container">
                    <div className="article-intro-heading">
                        <h2> हजारों वर्षो से बर्थ कंट्रोल के तरीकों का प्रयोग किया जा रहा है। लोगों में गर्भनिरोधक विकल्पों को लेकर कईj</h2>
                    </div>
                    <div className="article-intro-content">
                        <p>{article.body}</p>
                    </div>
                </div>
                <ArticleSectionList/>
                <ArticleBody body={ article.body }/>
                <ArticleTags tags={ article.tags } />
                
              </div>
            )
          }
        </article>
        

        {/**/}
      </div>
        
    )
  }
}
