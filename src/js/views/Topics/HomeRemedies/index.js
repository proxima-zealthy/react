import React, { Component } from 'react'
import { connect } from 'react-redux';
import Feeds from 'views/Feeds';

@connect(state => ({ ...state.topic }))

export default class extends Component {
  render() {
    const homeRemediesData=this.props.data.home_remedies
    return (
      <div className="homeremedies-maincontainer">
          <Feeds feeds={ homeRemediesData }/>
      </div>
    )
  }
}
