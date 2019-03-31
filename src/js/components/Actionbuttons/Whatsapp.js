import React, { Component } from 'react';
import WhatsappIcon from 'svg/ic_whatsapp.svg';
export default class Whatsapp extends Component {
  render() {
    return (
        <div className="whatsapp-button" style={{position:'relative',top:'5px'}}>
          <a href='whatsapp://send?text=Text to send withe message: http://www.yoursite.com'>
            <p>
            <WhatsappIcon/>
            <span style={{position:'relative',left:'4px',bottom: '7px'}}>15</span>
            </p>
            
          </a>
          
        </div>
    )
  }
}