import React, { Component } from 'react'
//import './Categories.js'



export class GetCategories extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         categories:[]
      }
     
      
    }

    componentWillMount(){
        
        fetch("https://jsonplaceholder.typicode.com/albums").then(res=> res.json())
        .then(data => this.setState({categories: data}));
        console.log(this.state.categories)
    }
    
  render() {
    const category=this.state.categories.map(post=>(<p>{post.title}</p>));
    return (
      <div>
        
        {category[0]}
      </div>
    )
  }
}

export default GetCategories
