import React, { Component } from 'react'
import LikeSection from './LikeSection'

export default class Like extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        likes: 15,
        liked: false
      }
    }

    incrementLike = () => {
        let likes = this.state.likes;
        let checked = this.state.liked;
        checked = !checked;
        if(checked === false) {
            likes = likes - 1;
            //console.log(likes);
        } else {
            likes = likes + 1;
            //console.log(likes);
        }
        this.setState({liked: checked, likes: likes});
    }
    
    
    render() {
      return (
        <div className="like-button" style={{position:'relative',top:'10px'}}>
          <LikeSection incrementLike={this.incrementLike} likes={this.state.likes} liked={this.state.liked}/>
        </div>
      )
    }
}
