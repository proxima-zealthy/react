import React, { Component } from 'react'
import { connect } from 'react-redux';
import Feeds from '../views/Feeds';
import { fetchAllFeeds} from "reducers/feeds";


@connect(state => ({ ...state.feed }), {
  fetchAllFeeds
})
  export default class Home extends Component {
    static fetchData({ store, params }) {
      

      return store.dispatch(fetchAllFeeds())
        .catch(err => {
          // TODO: Redirect to Not Found page for topics
          console.log('Display notification on error...', err);
        }); // Dispatch action for store passed from server
    }
    componentDidMount() {
      // Check if data already exits from server side state
      if (!this.props.data) {
        this.props.fetchAllFeeds(articleId)
          .then(res => {
            console.log('Promise chain...', res);
          })
          .catch(err => {
            // TODO: Redirect to Not Found page for topics
            console.log('Display notification on error...', err);
          });
      }
    }
 
  render() {
    return (
      <div>
        <Feeds/>
      </div>
    )
  }
}