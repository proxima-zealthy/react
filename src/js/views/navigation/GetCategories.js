import React, { Component } from 'react'
import Categories from'../../mock-api/Categories.json'



export class GetCategories extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         categories:[]
      }
     
      
    }
    handleClick = e => {
      e.target.classList.toggle('active');
  
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    };

    
  render() {
   
    return (
      <div>
        {Categories.map(((Categories,index)=>{
            return <ul className="categoty" key={index}>
           
            <li>
            <button className="dropdown-btn" onClick={this.handleClick}>
                 {Categories.title}
                 <i className="fa fa-caret-down"></i>
            </button>
               <div className="dropdown-container">
               <ul>
                <li> <a href="/">Acne</a></li>
                 <li><a href="/">Oily Skin</a></li>
                 <li><a href="/">Dry Skin</a></li>
               </ul>
               </div>
           </li>
           
        </ul>
        }))}
       
      </div>
    )
  }
}


export default GetCategories
