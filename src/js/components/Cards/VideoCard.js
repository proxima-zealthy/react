import React, { Component } from 'react';
import Vplay from 'img/vplay.png'
import Like from '../Actionbuttons/Like'
import Share from '../Actionbuttons/Share'
import Whatsapp from '../Actionbuttons/Whatsapp'
import './VideoCard.scss';
export class VideoCard extends Component {
  render() {
    const data=this.props.video;
    //console.log('......................inside card',this.props.video);
    return ( 
      <div className="videocard-container">
          <div className="videocard-thumbnail">
            <img alt="vid" src={data.thumbnail}></img>
            <img  className="playicon" alt="playicon" src={Vplay}></img>
          </div>
          <div className="videocard-body">
              <h3>{data.desc}</h3>
          </div>
          <div className="videocard-buttom">
                <p> <span className="likebutton"><Like/></span> <span className="commentbutton"><Share/></span><span className="sharebutton"><Whatsapp/></span></p>
          </div>
     </div>
    )
  }
}

export default VideoCard
