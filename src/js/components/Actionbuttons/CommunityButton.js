import React, { Component } from 'react'
import CommunityIcon from 'svg/ic_groups.svg'

export default class CommunityButton extends Component {
  render() {
    return (
        <div>
          <a href="/" style={{marginTop: '2px'}}>
            <CommunityIcon/>
        </a>
        </div>
    )
  }
}
