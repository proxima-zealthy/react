import React, { Component } from 'react'
import GetFeeds from  'views/Article/Feeds/GetFeeds'
import ButtomNav from 'components/footerMobile/ButtomNav'

export class Home extends Component {
  render() {
    return (
      <div>
        <GetFeeds/>
        <ButtomNav/>
      </div>
    )
  }
}

export default Home
