import React, { Component } from 'react';
import FeedCard from '../../components/Cards/FeedCard';

export default class Feeds extends Component {
 
  render() {
    const allFeed=this.props.feeds;
    return (
      <div>
        {
          allFeed.map((feed)=>(
            <FeedCard feedData={feed}/>
          ) )
        }
        
      </div>
    )
  }
}

