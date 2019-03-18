import React, { Component } from 'react'
//import './Slider.scss';

export default class Carousel extends Component {

  componentDidMount(){
    window.addEventListener('load', function () {
        window.glides = new Glider(document.getElementById('glider-double'), {
          slidesToShow: 5,
          slidesToScroll: 5,
          draggable: true,
          dots: '#dots2',
          arrows: {
            prev: '#glider-prev-2',
            next: '#glider-next-2'
          }
        })
      });
  }
  render() {
    
    

    return (
      <div id="main">
      <section id="demos" class="main special">
        
        <div class="demo">
          <h2>Multiple Item</h2>
          <div data-name="Multiple Item" class="glider-contain multiple">
            <div class="gradient-border-bottom">
              <div class="gradient-border">
                <div class="glider" id="glider-double">
                  <div><h1>1</h1></div>
                  <div><h1>2</h1></div>
                  <div><h1>3</h1></div>
                  <div><h1>4</h1></div>
                  <div><h1>5</h1></div>
                  <div><h1>6</h1></div>
                  <div><h1>7</h1></div>
                  <div><h1>8</h1></div>
                  <div><h1>9</h1></div>
                  <div><h1>10</h1></div>
                  <div><h1>11</h1></div>
                  <div><h1>12</h1></div>
                  <div><h1>13</h1></div>
                  <div><h1>14</h1></div>
                  <div><h1>15</h1></div>
                  <div><h1>16</h1></div>
                  <div><h1>17</h1></div>
                  <div><h1>18</h1></div>
                </div>
              </div>
            </div>
            <button role="button" aria-label="Previous" class="glider-prev" id="glider-prev-2"><i class="fa fa-chevron-left"></i></button>
            <button role="button" aria-label="Next" class="glider-next" id="glider-next-2"><i class="fa fa-chevron-right"></i></button>
            <div id="dots2"></div>
          </div>
          </div>
            </section>
          
    </div>
    )
  }
}