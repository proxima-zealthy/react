import React, { Component } from 'react'
import Messageicon from 'svg/message.svg';
export default class Message extends Component {
  render() {
    return (
        <div className="message-button" style={{position:'relative',top:'10px'}}>
          <a href="/" style={{marginTop: '2px'}}>
            <Messageicon/>
          </a>
        </div>
    )
  }
}