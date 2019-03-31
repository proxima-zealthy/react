import React, { Component } from 'react';
import FeedCard from 'components/Cards/FeedCard';
import './Slider.scss';
import './main.scss';

export default class Carousel extends Component {

  componentDidMount(){
    window.addEventListener('load', function () {
        window.glides = new Glider(document.querySelector('.glider-article'), {
          slidesToShow: 3,
          slidesToScroll: 5,
          draggable: true,
          dots: '#dots',
         
          responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 775,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 'auto',
                slidesToScroll: 'auto',
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
              }
            }
          ]
          
        }),
        window.glides = new Glider(document.querySelector('.glider-video'), {
          slidesToShow: 3,
          slidesToScroll: 5,
          draggable: true,
          dots: '#dots',
         
          responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 775,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 'auto',
                slidesToScroll: 'auto',
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
              }
            }
          ]
          
        })

      });
  }
  render() {
    const allFeed =this.props.Dataforfeeds;
    const sliderType=this.props.getSlide;
    
    return (
      <div >
        <div className={sliderType}>
            {this.props.children}        
        </div>
        <div id="dots" className="glider-dots"></div>
        
     </div>
    )
  }
}