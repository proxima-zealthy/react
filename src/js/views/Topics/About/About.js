import React, { Component } from 'react'
import SubTopic from './SubTopic/SubTopic'


export class About extends Component {
  render() {
    //const topic=this.props.match.params.topicname
    return (
      <div>
       { /*<SubTopic topic={topic}/>*/}
       <SubTopic/>
      </div>
    )
  }
}

export default About
