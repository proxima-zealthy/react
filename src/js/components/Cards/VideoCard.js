import React, { Component } from 'react';
import Vplay from 'img/vplay.png'
import Like from '../Actionbuttons/Like';
import Share from '../Actionbuttons/Share';
import Whatsapp from '../Actionbuttons/Whatsapp';
import CardBottom from './CardBottom';
import Spacer from 'utils/Spacer';
import Articlecardicon from 'svg/article-card-icon.svg';
import './VideoCard.scss';

export class VideoCard extends Component {
  render() {
    const data=this.props.data;
    
    return ( 
      <div key= { this.props.id } className="videocard-container">
          <div className="videocard-identity"><Articlecardicon/>  Video </div>
          <div className="videocard-thumbnail">
            <img className="videocard-img" alt="vid" src={ data.thumbnail }></img>
            <img  className="playicon" alt="playicon" src={ Vplay }></img>
          </div>
          <div className="videocard-body">
              <h3>{ data.title }</h3>
          </div>
          <hr className="videocard-hr"></hr>
          <CardBottom>
            <Like/>
            <Spacer/>
            <Share/>
            <Whatsapp/>
          </CardBottom>
          
     </div>
    )
  }
}

export default VideoCard
