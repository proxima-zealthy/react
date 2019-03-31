import React, { Component } from 'react'
import { connect } from 'react-redux';
import QnACard from 'components/Cards/QnACard';

@connect(state => ({ ...state.topic }))

export default  class extends Component {
  render() {
    const QAData=this.props.data.QnA;
  
    return (
      <div>
        <QnACard Data={ QAData }/>
      </div>
    )
  }
}

