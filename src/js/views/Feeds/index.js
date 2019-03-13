import React, { Component } from 'react';
import MOCKAPI from '../../mock-api';
import mockFeedData from '../../mock-api/feed';

export default class Feeds extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       feeds:[]
    }
  }
componentWillMount(){
  console.log("one")
  async function fetchAllFeeds(){
       const Feeds=await MOCKAPI(mockFeedData())
        .then((data)=> {
          return data;
          console.log('Promise chain...',data);
        })
        .catch(err => {
          // TODO: Redirect to Not Found page for topics
          console.log('Display notification on error...', err);
        })
        console.log(".....getting......",Feeds)
        return Feeds;
      }
      fetchAllFeeds();
      console.log("two")

  
} 

   
  render() {
    console.log("three")
    console.log('.............',this.state.feeds)
    return (
      <div>
         here goes all the feeds...
      </div>
    )
  }
}

