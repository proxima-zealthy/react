import React, { Component } from 'react'

import Carousel  from '../Carousel';

export default  class RelatedArticles extends Component {
  render() {
    const Feeds =this.props.feeds;
    return (
      <div>
        <Carousel Dataforfeeds ={ Feeds }/>
      </div>
    )
  }
}
//add the feeds inside the carousel and use it 

