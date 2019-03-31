import React, { Component } from 'react'
import AskIcon from 'svg/ic_ask.svg';

export default class AskExpertButton extends Component {
  render() {
    return (
        <div>
          <a href="/" style={{marginTop: '2px'}}>
            <AskIcon/>
          </a>
        </div>
    )
  }
}
