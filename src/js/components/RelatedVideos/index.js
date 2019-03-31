import React, { Component } from 'react'
import Carousel  from '../Carousel';
import VideoCard from 'components/Cards/VideoCard';

export default  class RelatedVideos extends Component {
  render() {
    const Feeds =this.props.feeds;
    return (
      <div>
         <Carousel getSlide="glider-video">
            {Feeds.map((feed,id)=>(
            <figure key={ id }><VideoCard data={feed}/></figure>
             ))}
        </Carousel>
       
      </div>
    )
  }
}
//add the feeds inside the carousel and use it 

