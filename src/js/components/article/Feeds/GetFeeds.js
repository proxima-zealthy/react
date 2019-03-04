import React, { Component } from 'react'
import FeedCard from '../../Cards/FeedCard';

export class GetFeeds extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           feeds:[]
        }
       
        
      }
  
      componentWillMount(){
          
          fetch("https://jsonplaceholder.typicode.com/posts").then(res=> res.json())
          .then(data => this.setState({feeds: data}));
          
      }
      
      
    render() {
      const article=this.state.feeds
      //console.log(article)
      return (
        <div style={{textAlign:'center'}}>
          <FeedCard props={article}/>
        </div>
      )
    }
  }
export default GetFeeds
