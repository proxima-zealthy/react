import React, { Component } from 'react'

export class ArticleTags extends Component {
  render() {
    console.log('.........................',this.props)
    return (
        <div className="Article-Tags-container">
        <ul style={{display:'inline'}}>
        {
          this.props.tags.map((tag)=>(
           <li key={tag.id}> <a href="/">{tag.name}the tags</a></li>

          ))
        }
      
        </ul>      
        </div>
    )
  }
}

export default ArticleTags
