import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoFeeds from '../Videos/VideoFeeds';

@connect(state => ({ ...state.topic }))

export default class Videos extends Component {
  renderVideos(Videos){

    if(!Videos){
      return Videos;
    }
    Videos =this.props.data && this.props.data.videos;
    return  Videos;
  }
  
  render() {
    const Videos=[]
   const AllVideos=this.renderVideos(Videos);
   //console.log('//........................',AllVideos)
    return (
      <div className="Videos-container">
          <VideoFeeds videos={AllVideos}/>
      </div>
    )
  }
}
