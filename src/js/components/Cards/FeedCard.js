import React, { Component } from 'react';
import Like from '../Actionbuttons/Like';
import Share from '../Actionbuttons/Share';
import Whatsapp from '../Actionbuttons/Whatsapp';
import CardBottom from 'components/Cards/CardBottom';
import Spacer from 'utils/Spacer';
import Articlecardicon from 'svg/article-card-icon.svg';
import Views from 'components/Actionbuttons/Views';
import Message from 'components/Actionbuttons/Message';
import './FeedCard.scss';


export default class FeedCard extends Component {
  render() {
     const data=this.props.feedData;
    return ( 
       <div key ={ this.props.index } className="feedcard-container">
            <div className="feedcard-identity"><Articlecardicon/>  Article</div>
            <div className="feedcard-thumbnail">
                <img alt="card-image" src={data.thumbnail}></img>
                <p style={{ position: 'absolute',bottom: '0',right: '5px',margin:'0'}}><Views/></p>
            </div>
            <div className="feedcard-body">
              <h3>{ data.title }</h3>
            </div>
            {/*<div className="feedcard-body">
              <h3>{data.desc}</h3>
            </div>*/}
            <hr className="feedcard-hr"></hr>
            <CardBottom>
              <Like/>
              <Message/>
              <Spacer/>
              <Share/>
              <Whatsapp/>
            </CardBottom>
       </div>
    )
  }
}

