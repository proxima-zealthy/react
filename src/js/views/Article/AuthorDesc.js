import React, { Component } from 'react';
import Authorimage from 'img/author.png'

export default class AuthorDesc extends Component {
  render() {
    return (
      <div className="AuthorDesc-container">
        <div className="AuthorDesc-heading">
            <h2>Author Description</h2>
        </div>
        <div className="AuthorDesc-body">
            <div className="AuthorDesc-left"><img src={Authorimage}></img></div>
            <div className="AuthorDesc-right">
                <p>author name</p>
                <p>designation</p>
                <p>description</p>
            </div>
        </div>
      </div>
    )
  }
}
