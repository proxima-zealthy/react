import React, { Component } from 'react';
//import Vplay from 'img/vplay.png'
import Like from '../Actionbuttons/Like'
import Share from '../Actionbuttons/Share'
import Whatsapp from '../Actionbuttons/Whatsapp'
import './FeedCard.scss';

export default class FeedCard extends Component {
  render() {
     const data=this.props.feedData;
    return ( 
       <div className="feedcard-container">
            <div>jhfjhf</div>
            <div className="feedcard-thumbnail">
                <img alt="vid" src={data.thumbnail}></img>
            </div>
            <div className="feedcard-title">
              <h3>{data.title}</h3>
            </div>
            <div className="feedcard-body">
              <h3>{data.desc}</h3>
            </div>
            <div  className="feedcard-bottom">
              <div className="feedcard-bottom-item-left">
                <div className="feedcard-bottom-inner"><Like/></div>
                <div className="feedcard-bottom-inner"><Share/></div>
              </div>
              <div className="feedcard-bottom-item-right">
                <div className="feedcard-bottom-inner"><Share/> </div>
                <div className="feedcard-bottom-inner"><Whatsapp/></div>
              </div>
              
            </div>
       </div>
    )
  }
}

