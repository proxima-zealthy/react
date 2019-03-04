import React, { Component } from 'react'

export class ArticleBody extends Component {
  render() {
    return (
        <div className="article-body">

        <p>{this.props.body}
        </p>
        
        </div>
    )
  }
}

export default ArticleBody
