import React, { Component } from 'react'
import CommentBlocks from 'CommentBlocks.scss'

export class CommentBlock extends Component {
  render() {
    return (
      <div className="commentBox">
        <div className="comment-number"><p><span>comments</span><span>12</span></p></div>
        <div className="comments-area">comments-area
            <div>xyz</div>
            <div>mno</div>
        </div>
        <div className="comment-showmore"><div className="comment-button">show all comments ..</div></div>
        
      </div>
    )
  }
}

export default CommentBlock
