import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink,Switch, Route, Link, withRouter, Redirect } from 'react-router-dom';
import routes from 'routes';

import { fetchAllCategories }  from "reducers/categories";
//category image for demo view 
import Skincateg from 'img/skin-categ.png';
import Categimg from 'img/categ-img.png';
import './Explore.scss';


@connect(state => ({ ...state.categories }), {
  fetchAllCategories
})

export default class Explore extends Component {
  static fetchData({ store, params }) {
    return store.dispatch(fetchAllCategories( ))
      .catch(err => {
        // TODO: Redirect to Not Found page for category
        console.log('Display notification on error...', err);
      }); // Dispatch action for store passed from server
  }
  componentDidMount() {
    // Check if data already exits from server side state
    if (!this.props.data) {
      this.props.fetchAllCategories()
        .then(res => {
          console.log('Promise chain...', res);
        })
        .catch(err => {
          // TODO: Redirect to Not Found page for category
          console.log('Display notification on error...', err);
        });
    }
  }

  render() {
    return (
      <div className="explore-page-container">
      {/*explore page  */}
        <div>
           <h3 className="categories-title">TRENDING SUBTOPICS</h3>
        </div>
        <div className="trending-subtopic">
             <img className="grid-sub-img" src={Categimg}/>
             <img className="grid-sub-img" src={Categimg}/>
             <img className="grid-sub-img" src={Categimg}/>
             <img className="grid-sub-img" src={Categimg}/>
        </div>
        <div>        
          <h3 className="categories-title">ALL CATEGORIES</h3>
        </div>
        <div className="categories-container">
           <div className="category-grid">
              <img src={Skincateg} />
              <h4 className="centered">SKIN</h4>
           </div>
           <div className="category-grid">
              <img src={Skincateg} />
              <h4 className="centered">SKIN</h4>
           </div>
           <div className="category-grid">
              <img src={Skincateg} />
              <h4 className="centered">SKIN</h4>
           </div>
           <div className="category-grid">
              <img src={Skincateg} />
              <h4 className="centered">SKIN</h4>
           </div>
           <div className="category-grid">
              <img src={Skincateg} />
              <h4 className="centered">SKIN</h4>
           </div>
           <div className="category-grid">
              <img src={Skincateg} />
              <h4 className="centered">SKIN</h4>
           </div>
           <div className="category-grid">
              <img src={Skincateg} />
              <h4 className="centered">SKIN</h4>
           </div>
           <div className="category-grid">
              <img src={Skincateg} />
              <h4 className="centered">SKIN</h4>
           </div>
           <div className="category-grid">
              <img src={Skincateg} />
              <h4 className="centered">SKIN</h4>
           </div>
           <div className="category-grid">
              <img src={Skincateg} />
              <h4 className="centered">SKIN</h4>
           </div>
        </div>
      </div>
    )
  }
}
