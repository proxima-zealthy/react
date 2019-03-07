import React from 'react';
//import GetArticle from '../../../mock-api/GetArticle'

import 'FeedCard.scss';


const FeedCard = article => {
   // const title=article.props.map((post)=>(<p>{post.title}</p>))
    //const body=article.props.map((post)=>(<p>{post.body}</p>))
    const card=article.props.map((post)=>(
        <div className={`card-container`}>
          <div className="card-body">
              <div >
                  <img alt="article" className="card-image" src="https://material-ui.com/static/images/cards/paella.jpg"></img>
              </div>
              <div className="article-card-title">
                  <h2>{post.title}</h2>
              </div>
              <div className="card-desription">
              <p>{post.body}</p>
              </div>
              <div className="article-card-views">
              <p><span>3min read|</span><span>122 views</span></p>
              </div>

              <div className="card-buttom">
                  <p> <span className="likebutton">like</span> <span className="commentbutton">comment</span><span className="sharebutton">share</span></p>
              </div>

          </div>
        
    </div>
    ))
     
    return (
        
     
      <div className="card-grid">
         {card}
      </div>


   
    );
};
export default FeedCard;