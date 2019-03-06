import React, { Component } from 'react'
import 'Bottom.scss'
import Whatsapp from '../Actionbuttons/Whatsapp.js'
import Like from '../Actionbuttons/Like.js'
import Share from '../Actionbuttons/Share'
import Commentoverlay from '../Actionbuttons/Commentoverlay'

export default class ButtomNav extends Component {
  render() {
    return (
      <footer>

          <div className="ui-button">

           <div className="footer-nav">
              <div className="footer-nav-items">
                <ul>
                  <li>
                    <Commentoverlay/>
                  </li>
                  
                  <li>
                  <Like/>
                  </li>
                  <li>
                  <Share/>
                  </li>
                  <li>
                  <Whatsapp/>
                  </li>
                </ul>
              </div>
           
           </div>


            
          </div>
          
        <div className="mobile-overlay">
         
         

        </div>
                  
      </footer>
    )
  }
}

