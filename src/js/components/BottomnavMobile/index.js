import React, { Component } from 'react'
import 'Bottom.scss'

export default class  BottomnavforMobile extends Component {
  render() {
     const visible=this.props.controllerClass;  
       
    return (
      <div style={{paddingTop:'60px'}} className={visible? 'bottomnav':'bottomnavdisabled'}>
        <div className="bottom-container">
          <div className="bottomnav-item">
               {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
