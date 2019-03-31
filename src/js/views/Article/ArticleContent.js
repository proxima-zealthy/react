import React, { Component } from 'react';
import Banner from './Banner';
import QuickBites from './QuickBites';
import SectionList from './SectionList'
import Heading from './Heading';
import ArticleAuthor from 'components/AuthorDetails/Author';
import ArticleAvatar from 'components/AuthorDetails/AuthorAvatar';
import AllSection from './Sections';
import ViewsSvg from 'svg/views.svg';

export default class ArticleContent extends Component {
  render() {
    const article=this.props.data.content;
    const views=this.props.data.views;
    return (
      <div className="article-container">
        {/**/}
        <article>
          {
            article && (
              <div className="article-main">
                <Banner image={ article.image } />

                <Heading title={ article.title }/>
                {/*article's author at top */}
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
                <QuickBites/>
                {/*article introduction  */}
                <div className="article-intro-container">
                    <div className="article-intro-heading">
                        <h2> हजारों वर्षो से बर्थ कंट्रोल के तरीकों का प्रयोग किया जा रहा है। लोगों में गर्भनिरोधक विकल्पों को लेकर कईj</h2>
                    </div>
                    <div className="article-intro-content">
                        <p>{article.body}</p>
                    </div>
                </div>
                {/* send data to sectionlist and individual section */}
                <SectionList/>
                <AllSection body={ article.body }/>  
             </div>
            )
          }
        </article>
        

        {/**/}
      </div>
        
    )
  }
}
