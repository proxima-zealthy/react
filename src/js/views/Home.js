import React, { Component } from 'react'
import Navigation from './navigation/Navigation'
import GetFeeds from './article/Feeds/GetFeeds'
import SubTopicNavigation from './subtopic-Nav/SubTopicNavigation'
import ButtomNav from './footerMobile/ButtomNav'

export class Home extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <SubTopicNavigation/>

        <GetFeeds/>
        <ButtomNav/>
      </div>
    )
  }
}

export default Home