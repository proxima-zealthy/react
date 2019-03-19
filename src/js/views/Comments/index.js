import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchCommentsByArticleId } from 'reducers/comments'
import './Comment-page.scss'

@connect(state => ({ ...state.comments }), {
  fetchCommentsByArticleId
})

export default  class Comments extends Component {
  static fetchData({ store, params }) {
    const articleId = params.id;
    return store.dispatch(fetchCommentsByArticleId(articleId))
      .catch(err => {
        // TODO: Redirect to Not Found page for topics
        console.log('Display notification on error...', err);
      }); // Dispatch action for store passed from server
  }
  componentDidMount() {
    // Check if data already exits from server side state
    if (!this.props.data) {
      const articleId = this.props.match.params.id;

      this.props.fetchCommentsByArticleId(articleId)
        .then(res => {
          console.log('Promise chain...', res);
        })
        .catch(err => {
          // TODO: Redirect to Not Found page for topics
          console.log('Display notification on error...', err);
        });
    }
  }
  addComment(e){
    e.preventDefault();
    const author = this.author.value;
    const text = this.text.value;
    console.log("submitting comments",author,text);
  }
  render() {
    const comments=this.props.data.comments
    console.log(comments);
    //const articleId = this.props.match.params.id;
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
        <div>
          {comments.map((comment)=>(
            <ul>
              <li><span>{ comment.user }</span>:<span>{ comment.text }</span><span>X</span></li>
            </ul>
          ))}
        </div>
        <div>
          <form onSubmit={this.addComment} ref={element => (this.commentForm = element)}>
            <input type="text"  ref={element => (this.text = element)}/>
            <input type="author"  ref={element => (this.author = element)} />
            <input type="submit" hidden/>
          </form>
          

        </div>
      </div>

     
    )
  }
}
