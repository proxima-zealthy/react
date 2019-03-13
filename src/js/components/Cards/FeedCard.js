import React, { Component } from 'react';
//import Vplay from 'img/vplay.png'
import Like from '../Actionbuttons/Like'
import Share from '../Actionbuttons/Share'
import Whatsapp from '../Actionbuttons/Whatsapp'
import './FeedCard.scss';
export class feedCard extends Component {
  render() {
    //const data=this.props.feed;
    const data={
        "id":1,
        "thumbnai":"hsjhd",
        "desc" :"duhdueh"
     };
    return ( 
       <div className="feedcard-container">
            <div>jhfjhf</div>
            <div className="feedcard-thumbnail">
                <img alt="vid" src="https://material-ui.com/static/images/cards/paella.jpg"></img>
            </div>
            <div className="feedcard-title">
              <h3>{data.desc}</h3>
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

export default feedCard
