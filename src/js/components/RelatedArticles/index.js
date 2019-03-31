import React, { Component } from 'react'
import Carousel  from '../Carousel';
import FeedCard from 'components/Cards/FeedCard';

export default  class RelatedVideos extends Component {
  render() {
    const Feeds =this.props.feeds;
    return (
      <div>
         <Carousel getSlide="glider-article">
          {Feeds.map((feed,id)=>(
            <figure key={ id }><FeedCard feedData={feed}/></figure>
         ))}
        </Carousel>
      </div>
    )
  }
}
//add the feeds inside the carousel and use it 
