import React, { Component } from 'react'
import 'Bottom.scss'

export default class  BottomnavforMobile extends Component {
  render() {

    const hidden =this.props.controllerClass;  
       
    return (
      <div style={{paddingTop:'60px'}}>
        <div className={hidden? `bottom-container  hidden`:'bottom-container'}>
          <div className="bottomnav-item">
                  {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
