import React, { Component } from 'react'
import './CardStyle.css'

export class VideoCard extends Component {
  render() {
    return (
      <div>
          <div className={`card-container`}>
            <div className="article-body">
                <div className="article-card-title">
                    <h2>the title goes here</h2>
                </div>
                <div className="vedio-card">
                <iframe width="300" height="200" src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
</div>
                
                
                <div className="article-views">
                <p><span>3min read|</span><span>122 views</span></p>
                </div>

                <div className="card-buttom">
                    <p> <span className="likebutton">like</span> <span className="commentbutton">comment</span><span className="sharebutton">share</span></p>
                </div>

            </div>
          
          </div>
        
      </div>
    )
  }
}

export default VideoCard
