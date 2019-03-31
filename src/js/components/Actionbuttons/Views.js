import React, { Component } from 'react'
import IcViews from 'svg/ic_views.svg'

export default  class Views extends Component {
  render() {
    return (
        <span><span><IcViews/></span><span style={{position: 'relative',top: '-9px',left: '2px',color:'#777777'}}>12k</span></span>
     
    )
  }
}

