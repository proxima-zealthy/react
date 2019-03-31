import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchCommentsByArticleId, addCommentByEntity } from 'reducers/comments'
import './Comment-page.scss'

@connect(state => ({ ...state.comments }), {
  fetchCommentsByArticleId
})

export default  class Comments extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       comment: "",
       comments: [],
       commentData: []
    }
    this.handleCommentChange=this.handleCommentChange.bind(this);
  }
  
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
    this.setState({
      comments: this.props.data.comments
    }, () => {
      var comment_cotainer = [];
      this.state.comments.map((d, i) => {
        comment_cotainer.push(
          <Comment key={i} id={i} user={d.user} text={d.text} />
        )
      })
      this.setState({
        commentData: comment_cotainer
      });
    })
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

  handleCommentChange(e) {
    this.setState({ comment:e.target.value });
  }

  addComment(e){
    e.preventDefault();
    const comment=e.target[0].value;
    //addCommentByEntity(comment)
    //console.log("comment: " +e.target[0].value); 
  }

  render() {

    //const comments=this.props.data.comments
    //console.log(comments);
    //const articleId = this.props.match.params.id;
    return (
      <div>
        <div className="title">
          <p>COMMENTS (12) </p>
            </div>
            
          {this.state.commentData}
          <br />
          <br />
        <div>
          {/*comments.map((comment)=>(
            <ul>
              <li><span>{ comment.user }</span>:<span>{ comment.text }</span><span>X</span></li>
            </ul>
          ))*/}
        </div>
        <div>
          <form onSubmit={this.addComment}>
          <input type="text"name="username" ref={node => (this.inputNode = node)}/>
            <button type="submit">comment</button>
          </form>
          
        </div>
      </div>

     
    )
  }
}


const Comment = ({id, user, text }) => {
  const show = (e) => {
    var d = document.getElementById(e);
    console.log(d.style.display);
    if(d.style.display === "none"){
      d.style.display = "flex";
    }else{
      d.style.display = "none";
    }
  }

  return(
    <div className="border-box">
        <div className="comment-box">
            <div className="profile-pic">
                <img src="kjkjk"/>
            </div>
            <div className="profile-name">
                <p>{user}</p>
            </div>
            <div className="date-time">
                <p>12:43PM. 12th Jan '19</p>
            </div>
            <div className="user-comment">
              <p>{text}</p>
            </div>
            <div className="reply-btn">
                <li className="dropdown">
                    <span href="javascript:void(0)" row="2" onClick={() => show(id)} className="dropbtn">Reply</span>
                </li>
            </div>
                  <div id={id} className="dropdown-content">
                  <input autocomplete="off" type="text" id="name" placeholder="Write a comment..." />
                  <button>Submit</button>
                </div>
        </div>
    </div>
  )
}