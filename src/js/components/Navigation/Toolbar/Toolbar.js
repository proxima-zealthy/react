import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from 'routes';
import SearchiconSvg from 'svg/searchicon.svg'

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import 'Toolbar.scss';

export default props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div>
        <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="toolbar__logo">
        <NavLink to={routes.HOME.path}>
          ZEALTHY
        </NavLink>
      </div>

      <div className="spacer"></div>
      <div className="search-container">
                <input type="text" placeholder="Search.." name="search"/>
                <button type="submit"><SearchiconSvg/></button>
      </div>
      <div className="spacer"></div>
      <div className="toolbar_navigation-items">
        <ul>
          <li className="Signin">
          <NavLink to="/">
              SIGN IN
            </NavLink>
            
          </li>
        {/* <li>
            <NavLink to={routes.COUNTER.path}>
              Counter
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.MEMBERS.path}>
              Members List
            </NavLink>
          </li>*/}
        </ul>
      </div>
    </nav>
  </header>
);
