import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchCommentsByArticleId } from 'reducers/comments'

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
