import React, { Component } from 'react'

export default class ArticleBody extends Component {
  render() {
   // data=this.props.body

    return (
      <div className="section-wrapper">
        <a name="target"> &nbsp;</a>
        <div id="section-1" className="Article-section-container">
          <div className="article-section-heading">
            <div className="header-item-left">
              <div className="left-box"><p>2</p></div>
            </div>
            <div className="header-item-right">
              <h2> हजारों वर्षो से बर्थ कंट्रोल के तरीकों का प्रयोग किया जा रहा है। लोगों में गर्भनिरोधक विकल्पों को लेकर कईj</h2>
            </div>
          </div>
          <div className="article-section-banner">
            <div className="article-banner">
              <img className="article-banner-image" src="https://cdn.makeawebsitehub.com/wp-content/uploads/2017/03/examples-of-blog.jpg"></img>
            </div>
          </div>
          <div className="article-section-content">
              <p>{this.props.body}</p>
          </div>
        </div>
      </div>
    )
  }
}
