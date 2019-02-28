import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Helmet} from "react-helmet";
import { increment } from 'reducers/counter';
import LikeSvg from 'svg/like.svg';
import DislikeSvg from 'svg/dislike.svg';
import ViewsSvg from 'svg/views.svg';
import carImg from 'img/car.jpg';

@connect(state => ({
  counter: state.counter.counter,
}), {
  increment
})
export default class Home extends Component {
  handleTestButtonClick = () => {
    const { increment } = this.props;

    increment();
  }

  render() {
    const { counter } = this.props;

    return (
      <div className='Home'>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="This is amazing home page." />
        </Helmet>
        <h1>Home Page</h1>
        <p>
          React SSR website
        </p>

        <hr />

        <h3>Action</h3>
        <div className='Example'>
          <p>Simple Redux based Counter: { counter }</p>
          <button onClick={ this.handleTestButtonClick }>
            Increase
          </button>
        </div>

        <h3>CSS background image</h3>
        <div className='Example'>
          <div className='BackgroundImgExample' />
        </div>

        <h3>Image imported to the component</h3>
        <div className='Example'>
          <img src={ carImg } alt='' className='ImgExample' />
        </div>

        <h3>SVGs imported as react components</h3>
        <div className='Example'>
          <LikeSvg style={ { marginRight: 10 } } />
          <DislikeSvg />
          <ViewsSvg style={ { marginRight: 10 } } />
        </div>
      </div>
    );
  }
}
