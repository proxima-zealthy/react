import React, { Component } from 'react'
import HeartlikeSvg from 'svg/heartlike.svg'
import LikeIcondefault from 'svg/ic_like_default.svg';
import LikeIconSelected from 'svg/ic_like_selected.svg';

export default class LikeSection extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        
        }
    }
    render() {
    return (
         <p onClick={this.props.incrementLike} >
            <span>{this.props.liked ? <LikeIconSelected/> : <LikeIcondefault/>}</span>
            <span style={{position:'relative',left:'4px',bottom: '7px'}}>{this.props.likes}</span>
         </p>     
    )
    }
}

