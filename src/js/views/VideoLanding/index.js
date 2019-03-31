import React, { Component } from 'react'
import './VideoLanding.scss';
import VidepPlayer from 'components/VideoPlayer';

export default class VideoLanding extends Component {
    constructor(props) {
        super(props);
        this.state = {
          videos: [],
        }
    }
      searchYT = (textToSearch) => {
        let apikey = 'AIzaSyDvA84T1MfmytDMHHimgMU6TPq_5X2ESmw';
        let url = `https://www.googleapis.com/youtube/v3/search?key=${apikey}&q=${textToSearch}&type=video&part=snippet`;
        fetch(url)
          .then(res => res.json())
          .then(data => this.setState({ videos: data.items }, console.log(data.items)));
      }
    
  render() {
    return (
      <div>
        <main className="VideoPage wrapper">
          <VidepPlayer/>
        </main>
      </div>
    )
  }
}
