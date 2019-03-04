import React, { Component } from 'react'
import SubTopicNavigation from './subtopic-Nav/SubTopicNavigation'
//import ArticlePage from '../article/ArticlePage'


export class Topic extends Component {
  render() {
    return (
      <div className="container">
          <SubTopicNavigation/>
          
      </div>
    )
  }
}

export default Topic
