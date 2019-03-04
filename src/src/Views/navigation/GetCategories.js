import React, { Component } from 'react'
import Categories from'../../mock-api/Categories.json'



export class GetCategories extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         categories:[]
      }
     
      
    }


    
  render() {
   //
    return (
      <div>
        {Categories.map(((Categories,index)=>{
            return <ul className="categoty">
           
            <li>
               <button className="dropdown-btn">
                 {Categories.title}
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
