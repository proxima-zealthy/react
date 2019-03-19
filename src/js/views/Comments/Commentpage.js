import React, { Component } from 'react'
//import CommentBox from '../Comment-box/CommentBox';
//import Comments from '../Comment-box/Comments';
//import social from '../../logo.svg'
import './Comment-page.scss'

export default class Commentpage extends Component {

    render() {

        return (
            <div>
                <div className="title">
                    <p>COMMENTS (12) </p>
                </div>
                <div className="border-box">
                    <div className="comment-box">
                        <div className="profile-pic">
                            <img src="kjkjk"/>
                        </div>
                        <div className="profile-name">
                            <p>Druti Singh</p>
                        </div>
                        <div className="date-time">
                            <p>12:43PM. 12th Jan '19</p>
                        </div>
                        <div className="comment">
                            <p>Its a lovely article. Very informative and useful.</p>
                        </div>
                        <div className="reply-btn">
                            <li className="dropdown">
                                <a href="javascript:void(0)" className="dropbtn">Reply</a>
                                <div className="dropdown-content">
                                    <input type="text" id="name" placeholder="Write a comment..." />
                                    <button>Submit</button>
                                </div>
                            </li>
                        </div>
                    </div>
                </div>
               
                
               
            </div>
        )
    }
}
