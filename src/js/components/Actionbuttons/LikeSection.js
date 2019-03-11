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
         <div onClick={this.props.incrementLike} className={this.props.liked ? "fas fa-heart icon" : "far fa-heart icon"}>
            <p>{this.props.likes}</p>
         </div>     
    )
    }
}

