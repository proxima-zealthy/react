import React, { Component } from 'react'

export class ArticleHeading extends Component {
  render() {
    return (
        <div className="article-header" >
            <h1 className="article-heading">{this.props.title}</h1>
            <p className="article-author">lorem ipsum </p>
            
        </div>
    )
  }
}

export default ArticleHeading
