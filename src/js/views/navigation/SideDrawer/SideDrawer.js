import React, { Component } from 'react';
import GetCategories from '../GetCategories'
import { classList } from '../../../utils/index';
import 'SideDrawer.scss';

export default class SideDrawer extends Component {
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
      <nav className={classList('side-drawer', this.props.isOpen && 'open')}>
       
            
              <GetCategories/>
           
          
              
      </nav>
    );
  }
}
