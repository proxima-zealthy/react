import React, { Component } from 'react'
import ReactDOM from "react-dom";
import Test from 'Test.scss'


export class ScrollTest extends Component {
    constructor(props) {
        super();
        this.state = {
            scrolled : false
        }
      
     
    }
    
        componentDidMount() {
            window.addEventListener('scroll',()=>{
                const isTop=window.scrollY< 100;
                //console.log(window.scrollY)
                if(isTop !== true){
                    this.setState({scrolled:true});
                }else{
                    this.setState({scrolled:false});
                }
            })
              
        }
        componentWillUnmount(){
            window.removeEventListener('scroll');
        }
    
    
  render() {
    return (
      <div style={{height:'120vh'}}>
        <nav className={this.state.scrolled ? 'navbar  scrolled':'navbar'} onClick={this.listenScrollEvent} ref="category_scroll">
                <a href="/">Home</a>
                <a href="#about">About</a>
                <div>
                    <p>
                        
                    </p>
                </div>
            </nav>
      </div>
    )
  }
}

export default ScrollTest
