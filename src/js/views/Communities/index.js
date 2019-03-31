import React, { Component } from 'react';
import './Community.scss';
import Arrow from 'svg/navarrow.svg';

export default class Communities extends Component {
  render() {
    return (
      <div className="communities-maincontainer">
        <div className="community-grid-container">
          <div className="community-left">
            <p className="community-image"></p>  
          </div>
          <div className="community-middle">
            <h2>community name</h2>
            <h3>1234 members</h3>
            <p>description about community
            description about community
            description about Community
            description about community
            description about community
            description about community

            </p>
          </div> 
          <div className="community-right">
            <p><Arrow/></p>
            <p className="join-button">
              <button >join</button>
            </p>
            <p className="after-join">
              <span></span><span>MEMBER</span>
            </p>
          </div>
          
        </div>
      </div>
    )
  }
}
