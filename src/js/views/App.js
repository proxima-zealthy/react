import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import routes from 'routes';
import NotFound from 'views/404';
//import { library } from '@fontawesome/fontawesome-svg-core';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faIgloo } from '@fortawesome/free-solid-svg-icons';
import Navigation from '../components/Navigation/Navigation';
import '../utils/Glider';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='Page'>
          <Navigation/>
          <Switch>
            <Route exact path={ routes.HOME.path } component={ routes.HOME.component } />
            <Route exact path={ routes.COMMUNITIES .path } component={ routes.COMMUNITIES.component }/>
            <Route path={ routes.COMMENTS.path } component={ routes.COMMENTS.component }/>
            <Route path={ routes.EXPLORE.path } component={ routes.EXPLORE.component }/>
            <Route path={ routes.QANDA.path } component={ routes.QANDA.component }/>
            <Route path={ routes.ARTICLE.path } component={ routes.ARTICLE.component } />
            <Route path={ routes.COUNTER.path } component={ routes.COUNTER.component } />
            <Route path={ routes.MEMBERS.path } component={ routes.MEMBERS.component } />
            <Route path={ routes.TOPIC.path } component={ routes.TOPIC.component } />
            <Route path={ routes.TEST.path } component={ routes.TEST.component } />
            <Route path='*' component={ NotFound } />
          </Switch>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
