import React, { Component } from 'react'
import Navigation from './navigation/Navigation'
import GetFeeds from '../components/article/Feeds/GetFeeds'
import SubTopicNavigation from './topics/subtopic-Nav/SubTopicNavigation'
//import ButtomNav from './footerMobile/ButtomNav'

export class Home extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        {/*<SubTopicNavigation/>*/}

        <GetFeeds/>

      </div>
    )
  }
}

export default Home