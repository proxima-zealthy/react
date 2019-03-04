import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Views/Home'
import ArticlePage from './components/article/ArticlePage'
import SubTopic from './Views/topics/Topic';
import About from './Views/topics/About/About'
import Topic from './Views/topics/Topic'
//import Navigation from './navigation/Navigation'


export class MainRoute extends Component {
  render() {
       {/*<div className="App">
       
        <Home/>
       
    </div>*/}
    return (
        <Router>
            <div>
            <Route exact path="/" component={Home} />
            <Route path="/article" component={ArticlePage} />
            <Route path="/topic/:topicname" component={About} />
            {/*<Route path="/topic/:topicname" component={Topic} /> */} 

            

            
            </div>
            
        </Router>
    )
  }
}

export default MainRoute
