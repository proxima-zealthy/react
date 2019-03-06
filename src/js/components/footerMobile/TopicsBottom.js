import React, { Component } from 'react'
import 'Bottom.scss'
import HomeButton from '../Actionbuttons/HomeButton'
import ExploreButton from '../Actionbuttons/ExploreButton'
import CommunityButton from '../Actionbuttons/CommunityButton'
import AskExpertButton from '../Actionbuttons/AskExpertButton'

export default class TopicsBottom extends Component {
  render() {
    return (
      <footer>

          <div className="ui-button">

           <div className="footer-nav">
              <div className="footer-nav-items">
                <ul>
                  <li>
                    <HomeButton/>
                  </li>
                  
                  <li>
                  <ExploreButton/>
                  </li>
                  <li>
                  <CommunityButton/>
                  </li>
                  <li>
                  <AskExpertButton/>
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

