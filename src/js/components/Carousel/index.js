import React, { Component } from 'react'
import Slider from './Slider';
import "Slider.scss";

export default class Carousel extends Component {
  render() {
    const items = ['x', 'y', 'z', 'f', 'g']

    const setting = {
      dragSpeed: 1.25,
      itemWidth: 200,
      itemHeight: 200,
      itemSideOffsets: 15,
    }

    const itemStyle = {
      width: `${setting.itemWidth}px`,
      height: `${setting.itemHeight}px`,
      margin: `0px ${setting.itemSideOffsets}px`
    }

    return (
        <div className='container'>
        
        <Slider _data={items} {...setting}>
          {
            items.map((i, _i) => (
              <div
                key={_i}
                className='item'
                style={{ ...itemStyle }}>
                <p>{i}</p>
              </div>
            ))
          }
        </Slider>
      </div>
    )
  }
}