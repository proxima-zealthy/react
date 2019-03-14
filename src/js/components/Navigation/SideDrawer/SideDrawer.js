import React, { Component } from 'react';
import GetCategories from '../GetCategories'
import { classList } from '../../../utils/index';
import 'SideDrawer.scss';


export default class SideDrawer extends Component {
  
  render() {
    return (
      <nav className={classList('side-drawer', this.props.isOpen && 'open')}>
         <GetCategories/>      
      </nav>
    );
  }
}
