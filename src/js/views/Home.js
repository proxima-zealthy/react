import React, { Component } from 'react'
import Navigation from 'views/navigation/Navigation'
import GetFeeds from  'views/Article/Feeds/GetFeeds'
import ButtomNav from 'components/footerMobile/ButtomNav'

export class Home extends Component {
  render() {
    return (
      <div>
        <Navigation/>
      

        <GetFeeds/>
        <ButtomNav/>
      </div>
    )
  }
}

export default Home
