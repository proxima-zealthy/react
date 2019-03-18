import React, { Component } from 'react'
import { connect } from 'react-redux';
import fetchCommentsById from 'reducers/comments'

//@connect(state => ({ ...state.comments }), {
//  fetchCommentsByEntityId,
//  removeCommentByEntityId
//})

export default  class Comments extends Component {
  
  render() {
    //const articleId = this.props.articleId;
    //const allComments=this.props.data.comments.comment;
    //console.log(allComments);
    return (
      <div>all comments</div>
     
    )
  }
}
