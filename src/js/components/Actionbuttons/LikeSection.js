import React, { Component } from 'react'
import HeartlikeSvg from 'svg/heartlike.svg'

export default class LikeSection extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        
        }
    }
    render() {
    return (
         <p style={{fontSize: '19px'}} onClick={this.props.incrementLike}  className={this.props.liked ? "fas fa-heart icon" : "far fa-heart icon"}>
            <span>{this.props.likes}</span>
         </p>     
    )
    }
}

