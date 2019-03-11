import React, { Component } from 'react'
import Whatsapp from '../Actionbuttons/Whatsapp.js'
import Like from '../Actionbuttons/Like'
import Share from '../Actionbuttons/Share'
import Commentoverlay from '../Actionbuttons/Commentoverlay'
import 'Bottom.scss'

export default class  BottomnavforMobile extends Component {
  render() {
    return (
      <div className="bottom-container">
            <div className="bottomnav-item"><Commentoverlay/></div>
            <div className="bottomnav-item"><Share/></div>
            <div className="bottomnav-item" style={{marginTop: '15px'}}><Like/></div>
            <div className="bottomnav-item"><Whatsapp/></div>
      </div>
    )
  }
}
