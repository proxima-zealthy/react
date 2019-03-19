import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import routes from 'routes';
import 'Breadcrumbs.scss'


export default class Breadcrumbs extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       items:[],
       active:""
    }
    
  }
 
  render() {
     //console.log('...................',this.props.items);
     const breadcrumbItems=this.props.items;
    return (
      <div className="bd-menu">
          <NavLink to={routes.HOME.path}><i className="fas fa-arrow-left"></i></NavLink>
          <ul className="bd-menu-item">
              {breadcrumbItems.map((item) => {
                return <li key={item.id}><NavLink to={routes.HOME.path}>{item.name}</NavLink></li> 
              })}
         </ul>
      </div>
    )
  }
}
