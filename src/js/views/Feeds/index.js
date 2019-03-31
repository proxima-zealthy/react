import React, { Component } from 'react';
import FeedCard from '../../components/Cards/FeedCard';

export default class Feeds extends Component {
 
  render() {
    const allFeed=this.props.feeds;
    return (
      <div className="feeds-container" style={{width: '335px',margin: 'auto'}}>
        {
          allFeed.map((feed, id)=>(
            <FeedCard feedData={feed} index={id}/>
          ) )
        }
        
      </div>
    )
  }
}

