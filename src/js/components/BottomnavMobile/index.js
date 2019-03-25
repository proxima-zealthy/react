import React, { Component } from 'react'
import 'Bottom.scss'

export default class  BottomnavforMobile extends Component {
  render() {
    const hidden =this.props.controllerClass;
    if(this.props.isStatic){
      var addstatic={
        position:'static!important',
      }
    }
    
       
    return (
      <div style={{paddingTop:'60px'}}>
        <div className={hidden? `bottom-container  hidden`:'bottom-container'} style={ addstatic }>
          <div className="bottomnav-item">
                  {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
