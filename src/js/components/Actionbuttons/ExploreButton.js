import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import routes from 'routes';
import ExploreIcon from 'svg/ic_explore.svg'

export default class ExploreButton extends Component {
  render() {
    return (
        <div>
          <NavLink to={routes.EXPLORE.path} style={{marginTop: '2px'}}>
             <ExploreIcon/>
          </NavLink>
         
        </div>
    )
  }
}

