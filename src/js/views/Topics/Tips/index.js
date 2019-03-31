import React, { Component } from 'react'
import { connect } from 'react-redux';
import Feeds from 'views/Feeds';

@connect(state => ({ ...state.topic }))

export default class extends Component {
  render() {
    const tipsData=this.props.data.tips
    return (
      <div className="tips-maincontainer">
          <Feeds feeds={tipsData}/>
      </div>
    )
  }
}
