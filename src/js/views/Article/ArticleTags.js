import React, { Component } from 'react'

export class ArticleTags extends Component {
  render() {
    const { tags } = this.props;

    return (
        <div className="Article-Tags-container">
        <a href="/"><p>tag1</p></a>       
        </div>
    )
  }
}

export default ArticleTags
