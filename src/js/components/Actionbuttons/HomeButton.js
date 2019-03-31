import React, { Component } from 'react'
import HomeIcon from 'svg/ic_home.svg'

export default class HomeButton extends Component {
  render() {
    return (
        <div>
        <a href="/" style={{marginTop: '2px'}}>
            <HomeIcon/>
        </a>
        </div>
    )
  }
}
