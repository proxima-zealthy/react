import React, { Component } from 'react'
import 'Commentarea.scss'

export class Commentoverlay extends Component {
  render() {
    return (
        <div className="comment-button">
        <button className="comment" style={{width:"170px"}}>comment here..</button>
        </div>
    )
  }
}

export default Commentoverlay