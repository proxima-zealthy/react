import React, { Component } from 'react';
import VideoCard from '../../../../components/Cards/VideoCard';


export default class VideoFeeds extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
    render() {
       // console.log(this.props)
     return (
      <div>
        
        {this.props.videos.map((videodata,index)=>(
            <VideoCard video= {videodata}/>
        ))}
      </div>
    )
  }
}


