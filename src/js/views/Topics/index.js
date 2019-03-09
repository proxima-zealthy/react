import React, { Component } from 'react'
import { Switch, Route, Link, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import routes, { TOPIC_ROUTES } from 'routes';
import TopicsBottom from '../../components/footerMobile/TopicsBottom'
import Tabs from 'components/Tabs';

import 'TopicPage.scss'
import { fetchTopicById } from "reducers/topic";
import About from "./About";
import Videos from "./Videos";
import Tips from "./Tips";
import HomeRemedies from "./HomeRemedies";
import QnA from "./QnA";


@withRouter
@connect(state => ({ ...state.topic }), {
  fetchTopicById
})
export default class Topics extends Component {
  static fetchData({ store, params }) {
    const topicId = params.id;

    return store.dispatch(fetchTopicById(topicId))
      .catch(err => {
        // TODO: Redirect to Not Found page for topics
        console.log('Display notification on error...', err);
      }); // Dispatch action for store passed from server
  }

  componentDidMount() {
    // Check if data already exits from server side state
    if (!this.props.data) {
      const topicId = this.props.match.params.id;

      this.props.fetchTopicById(topicId)
        .then(res => {
          console.log('Promise chain...', res);
        })
        .catch(err => {
          // TODO: Redirect to Not Found page for topics
          console.log('Display notification on error...', err);
        });
    }
  }

  renderTabsList() {
    const topicId = this.props.match.params.id;
    const baseRouteWithTopicId = routes.TOPIC.path.replace(':id', topicId);

    return [
      <Link to={`${baseRouteWithTopicId}/about`}>About</Link>,
      <Link to={`${baseRouteWithTopicId}/videos`}>Videos</Link>,
      <Link to={`${baseRouteWithTopicId}/home_remedies`}>Home Remedies</Link>,
      <Link to={`${baseRouteWithTopicId}/tips`}>Tips</Link>,
      <Link to={`${baseRouteWithTopicId}/qa`}>QnA</Link>,
    ];
  }

  render() {
    const baseRoute = `${ routes.TOPIC.path }`;

    const topicId = this.props.match.params.id;
    const baseRouteWithTopicId = baseRoute.replace(':id', topicId);

    const TABS_LIST = this.renderTabsList();

    return (
      <div className="Topic-container">
        <Tabs tabsList={TABS_LIST} customClass="TopicTabs" />
        <Switch>
          <Route exact path={`${ baseRoute}/about`} component={ About } />
          <Route exact path={`${ baseRoute }/home_remedies`} component={ HomeRemedies } />
          <Route exact path={`${ baseRoute }/tips`} component={ Tips } />
          <Route exact path={`${ baseRoute }/videos`} component={ Videos } />
          <Route exact path={`${ baseRoute }/qa`} component={ QnA } />
          <Redirect from={`${ baseRoute }*`} to={`${ baseRouteWithTopicId}/about`}/>
        </Switch>

        <TopicsBottom/>
      </div>
    )
  }
}
