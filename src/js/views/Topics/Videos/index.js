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
   const videos=[]
   const allVideos=this.renderVideos(videos);
    return (
      <div className="Videos-container" style={{ padding: '0 20px'}}>
          <VideoFeeds videos={allVideos}/>
      </div>
    )
  }
}
