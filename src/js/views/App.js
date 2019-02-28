import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import routes from 'routes';
import NotFound from 'views/404';

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* Add general NavBar here */}

        <div className='Page'>
          <Switch>
            <Route exact path={ routes.HOME.path } component={ routes.HOME.component } />
            <Route path={ routes.ARTICLE.path } component={ routes.ARTICLE.component } />
            <Route path={ routes.COUNTER.path } component={ routes.COUNTER.component } />
            <Route path={ routes.MEMBERS.path } component={ routes.MEMBERS.component } />
            <Route path='*' component={ NotFound } />
          </Switch>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
