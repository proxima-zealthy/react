import React, { Component } from 'react'
import 'BottomNav.scss'
import Whatsapp from '../sharebuttons/Whatsapp.js'
import Commentoverlay from './Commentoverlay'

export default class ButtomNav extends Component {
  render() {
    return (
      <footer>
          
        <div className="ui-button">
           {/* <button className="ui button, my-button" style={{width: '50%',height: '100%'}}>COMMENTS</button>
            <button className="ui button, my-button" style={{width: '50%',height: '100%',display: 'block', float: 'right'}}>SHARE</button>*/}
          <a href="/"><Commentoverlay/></a>
          <a><Whatsapp/></a>
         
          
          </div>
                  
      </footer>
    )
  }
}

