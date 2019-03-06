import React, { Component } from 'react'
import Navigation from '../navigation/Navigation'
import SubTopicNavigation from './subtopic-Nav/SubTopicNavigation'
//import ArticlePage from '../article/ArticlePage'
import About from './About/About'
import TopicPage from 'TopicPage.scss'
import TopicsBottom from '../../components/footerMobile/TopicsBottom'


export class Topic extends Component {
  render() {
    return (
      <div className="topicpage-container">
          <Navigation/>
          <SubTopicNavigation/>
          <About/>
          <TopicsBottom/>
          
      </div>
    )
  }
}

export default Topic
