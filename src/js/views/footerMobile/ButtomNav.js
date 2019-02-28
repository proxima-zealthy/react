import React, { Component } from 'react'
import 'BottomNav.scss'

export default class ButtomNav extends Component {
  render() {
    return (
      <footer>
          <div className="mobile-bottom-bar">
            <a href="#" className="footer-link">
              <i className="fa fa-cog"></i> <span className='footer-text'>Settings</span>
            </a>
            <a href="#" className="footer-link">
              <i className="fa fa-sign-out"></i> <span className='footer-text'>Log out</span>
            </a>
          </div>
                  
      </footer>
    )
  }
}
