import React, { Component } from 'react'
export default class Whatsapp extends Component {
  render() {
    return (
        <div className="whatsapp-button" style={{position:'relative',top:'10px'}}>
          <a href="/"><i style={{fontSize: '20px'}} className="fab fa-whatsapp"></i></a>
        </div>
    )
  }
}