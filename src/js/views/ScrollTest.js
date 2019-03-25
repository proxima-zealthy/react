import React, { Component } from 'react'
import ReactDOM from "react-dom";
import Carousel from '../components/Carousel';


export class ScrollTest extends Component {
    constructor(props) {
        super();
        this.state = {
            scrolled : false
        } 
    }
    
  render() {
    return (
        <div>
            <Carousel/>
        </div>
    )
  }
}

export default ScrollTest
