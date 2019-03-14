import React, { Component } from 'react'
import Categories from'../../mock-api/Categories.json'



export class GetCategories extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         categories:[],
         show:false
      }
     
      
    }
    handleClick = e => {
      //console.log(e.target.classList);
      e.target.classList.toggle('active');
      
        const dropDown=this.state.show;
     
        this.setState({show:!dropDown});
    
    };

    
  render() {
   
    return (
      <div>
        {Categories.map(((Categories,index)=>{
            return <ul className="category" >
                        <li key={Categories.id} className="category-item">
                            <button className="dropdown-btn" onClick={this.handleClick}>
                              {Categories.title}
                            <i className="fa fa-caret-down"></i>
                            </button>
                                    <div className={this.state.show ? 'dropdown-container  isOpen':'dropdown-container isClosed'}>
                                      <ul>
                                        <li key={1}> <a href="/">Acne</a></li>
                                        <li key={2}><a href="/">Oily Skin</a></li>
                                        <li key={3}><a href="/">Dry Skin</a></li>
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
