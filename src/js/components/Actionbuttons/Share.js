import React, { Component } from 'react'
export default class Share extends Component {
  render() {
    return (
        <div>
          <a href="/">
            <i style={{fontSize: '20px'}} className="fas fa-share-alt"></i>
          </a>
        </div>
    )
  }
}