import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {Helmet} from "react-helmet";

// This component is used for Server rendering
// When you want to return 40x http statuses
const RouteStatus = ({ code, children }) => (
  <Route
    render={
      ({ staticContext }) => {
        if (staticContext) {
          staticContext.status = code;
        }

        return children;
      }
    }
  />
);

export default class extends Component {
  render() {
    return (
      <RouteStatus code={ 404 }>
        <Helmet>
          <title>General Page</title>
          <meta name="description" content="You can search for more content" />
        </Helmet>
        <div className='NotFound'>
          <h1>Not Found</h1>
        </div>
      </RouteStatus>
    );
  }
}
