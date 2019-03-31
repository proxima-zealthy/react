import React, { Component } from 'react';
import routes from 'routes';
import { NavLink } from 'react-router-dom';
import './Quicklink.scss';

export default class QuickLinks extends Component {
  render() {
    const QuickLinkItems = this.props.items;
    return (
      <div className="quicklink-container">
          <ul className="quicklink-items">
              {QuickLinkItems.map((item) => {
                return <li key={ item.id }><NavLink to = { routes.HOME.path }>{ item.name }</NavLink></li> 
              })}             
         </ul>
      </div>
    )
  }
}

