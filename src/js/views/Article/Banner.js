import React, { Component } from 'react'

export default class ArticleBanner extends Component {
  render() {
   // console.log(this.props)
    return (
        <div className="article-banner">
          <img className="article-banner-image" src={this.props.image}></img>
        </div>
    )
  }
}


