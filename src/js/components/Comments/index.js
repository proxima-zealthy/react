import React, { Component } from 'react'
import { connect } from 'react-redux';
import fetchCommentsById from 'reducers/comments'

@connect(state => ({ ...state.article}))
export default  class Comments extends Component {

  static fetchData({ store, params }) {
    const articleId = params.id;

    return store.dispatch(fetchCommentsById(articleId))
      .catch(err => {
        // TODO: Redirect to Not Found page for topics
        console.log('Display notification on error...', err);
      }); // Dispatch action for store passed from server
  }

  componentDidMount() {
    // Check if data already exits from server side state
    if (!this.props.data) {
      const articleId = this.props.match.params.id;

      this.props.fetchCommentsById(articleId)
        .then(res => {
          console.log('Promise chain...', res);
        })
        .catch(err => {
          // TODO: Redirect to Not Found page for topics
          console.log('Display notification on error...', err);
        });
    }
  }
  handleSubmit(e){
    e.preventDefault(); 
    console.log("submitting the form ")
  }
  render() {
    
    const allComments=this.props.data.comments.comment;
    console.log(allComments);
    return (
      <div className="comments">
          {
               allComments.map((comment)=>(
          
                <div>
                 <p><span>{comment.user}:</span><span> {comment.text}</span><span>x</span></p>
                </div>
                ))
          }
          <div>
            <form  className="comment-form" ref="comment-form" onSubmit={this.handleSubmit}>
              <input type="text" ref="user" placeholder="user"/>
              <input type="text" ref="comments" placeholder="comments"/>
              <input type='submit' hidden/>
            </form>
          </div>
      </div>
     
    )
  }
}
