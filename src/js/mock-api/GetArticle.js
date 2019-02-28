import React, { Component } from 'react'
//import './Categories.js'



export class GetArticle extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         article:[]
      }
     
      
    }

    componentWillMount(){
        
        fetch("https://jsonplaceholder.typicode.com/albums").then(res=> res.json())
        .then(data => this.setState({article: data}));
        console.log(this.state.article)
    }
    
  render() {
    const article=this.state.article.map(post=>(<p>{post.title}</p>));
    return (
      <div>
        
        {article[0]}
      </div>
    )
  }
}

export default GetArticle
