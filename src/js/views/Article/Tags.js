import React, { Component } from 'react'

export class ArticleTags extends Component {
  render() {
    //const colorarray=["red","green","orange","blue","yellow"];
    //const tags=this.props.tags;
    //function addColortoArray(tags,colorarray){
    //  for(var i=0;i<=tags.length;i++){
    //   return  <li key={tags[i].id}> <a href="/">{tags[i].tagname} style={{ color:`${ colorarray[i]}` }}</a></li>
    //  }
    //}
    return (
        <div className="Article-Tags-container">
        <ul>
        {
          this.props.tags.map((tag)=>(
           <li key={tag.id}> <a href="/">{tag.tagname}</a></li>
          ))
         
        } 
        </ul>      
        </div>
    )
  }
}

export default ArticleTags
