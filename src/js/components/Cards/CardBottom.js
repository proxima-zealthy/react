import React, { Component } from 'react';
import './CardBottom.scss'

export default class CardBottom extends Component {
  render() {
    return (
        <div className="cardBottom-container" >
          <div className="cardBottom-item">
              {this.props.children}
          </div>
        </div>
    )
  }
}
