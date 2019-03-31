import React, { Component } from 'react';
import VideoCard from 'components/Cards/VideoCard';


export default class VideoFeeds extends Component {   
    render() {
       // console.log(this.props)
     return (
      <div>
        {this.props.videos.map((videodata,index)=>(
            <VideoCard data= { videodata } id= { index }/>
        ))}
      </div>
    )
  }
}


