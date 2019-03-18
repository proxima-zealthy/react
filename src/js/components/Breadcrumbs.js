import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import routes from 'routes';
import TopicNav from '../mock-api/TopicNav.json'
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
    //here topicNav will be replaced by real data
    return (
      <div className="bd-menu">
          <NavLink to={routes.HOME.path}><i className="fas fa-arrow-left"></i></NavLink>
          <ul className="bd-menu-item">
              {TopicNav.map((menu) => {
                return <li key={menu.id}><NavLink to={routes.HOME.path}>{menu.name}</NavLink></li> 
              })}
         </ul>
      </div>
    )
  }
}
