import React, { Component } from 'react'
import { connect } from 'react-redux';


@connect(state => ({ ...state.topic }))
export class About extends Component {
  render() {
    //console.log(this.props)
    const aboutContent = this.props.data && this.props.data.about;

    return (
      <div className="About-container">
        {/* Article section */}
        <article>
          {
            aboutContent && (
              <div className="article">
                <div className="article-banner">
                  <img className="article-banner-image" src={aboutContent.image} alt="article bannerimage"></img>
                </div>

                <div className="article-tags">
                  <a href="/"><p>tag1</p></a>
                </div>

                <div className="article-header" >
                  <h1 className="article-heading">{aboutContent.title}</h1>
                  <p className="article-author">{aboutContent.author}</p>
                </div>

                <div className="article-body" style={{textAlign:'justify'}}>
                  <p>
                    {aboutContent.body}
                  </p>
                </div>
              </div>
            )
          }
        </article>

        {/* Some part */}
        <div></div>
      </div>
    )
  }
}

export default About
