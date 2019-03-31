import React, { Component } from 'react'
import ShareIcon from 'svg/ic_share.svg'
export default class Share extends Component {
  render() {
    return (
        <div className="share-button" style={{position:'relative',top:'5px'}}>
          <a href="/" style={{marginTop: '2px'}}>
            <p>
            <ShareIcon/>
            <span style={{position:'relative',left:'4px',bottom: '7px'}}>15</span>
            </p>
          </a>
        </div>
    )
  }
}