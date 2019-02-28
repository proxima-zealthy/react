import React, { Component } from 'react';
import GetCategories from '../../../mock-api/GetCategories'
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
        <ul className="categoty">
          <li>
            <button className="dropdown-btn" onClick={this.handleClick}>
              <GetCategories/>
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
      </nav>
    );
  }
}
