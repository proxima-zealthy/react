import React, { Component } from 'react';
import './SubCategory.scss';


export default class SubCategory extends Component {
    
    render() {
     return (
      <div className="subcategory-container">
        <div className="subcategory-title">
         {/*<BackArrow/> */} EXPLORE SKIN
        </div>
        <div className="topic-list-container">
          <div className="topics-list-white">
            <div className="topic-name">TOPIC NAME</div>
          </div>
          <div className="topics-list">
            <div className="topic-name">TOPIC NAME</div>
          </div>
          <div className="topics-list-white">
            <div className="topic-name">TOPIC NAME</div>
          </div>
          <div className="topics-list">
            <div className="topic-name">TOPIC NAME</div>
          </div>
          <div className="topics-list-white">
            <div className="topic-name">TOPIC NAME</div>
          </div>
          <div className="topics-list">
            <div className="topic-name">TOPIC NAME</div>
          </div>
          <div className="topics-list-white">
            <div className="topic-name">TOPIC NAME</div>
          </div>
          <div className="topics-list">
            <div className="topic-name">TOPIC NAME</div>
          </div>
          <div className="topics-list-white">
            <div className="topic-name">TOPIC NAME</div>
          </div>
          <div className="topics-list">
            <div className="topic-name">TOPIC NAME</div>
          </div>
        </div>
      </div>
    )
  }
}

