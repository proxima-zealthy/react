import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Helmet} from "react-helmet";
import { fetchMember } from 'reducers/members';

/*
* Api based Redux example: This component fetches list through api using redux.
* */
@connect(state => ({ ...state.member }), {
  fetchMember
})
export default class Member extends Component {
  static fetchData({ store }) {
    return store.dispatch(fetchMember()); // Dispatch action for store passed from server
  }

  componentWillMount() {
    // Check if data already exits from server side state
    if (!this.props.list) {
      this.props.fetchMember()
        .then(res => {
          console.log('Promise chain...', res);
        })
        .catch(err => {
          console.log('Display notification on error...', err);
        });
    }
  }

  renderMemberList() {
    const { list } = this.props;

    return list.results.map(m => {
      return (
        <div key={ m.url } className='Member-info'>
          <h3>{ m.name }</h3>
          <div>Height: { m.height }</div>
          <div>Mass: { m.mass }</div>
          <div>Eye color: { m.eye_color }</div>
          <div>Hair color: { m.hair_color }</div>
          <div>Birth year: { m.birth_year }</div>
        </div>
      );
    });
  }

  render() {
    const {
      loading,
      error,
      list,
    } = this.props;

    return (
      <div className='Member'>
        <Helmet>
          <title>Member List</title>
          <meta name="description" content="This is amazing member page." />
        </Helmet>
        <h1>Members</h1>
        { loading && <div>Loading members...</div> }
        { error && error.toString() }
        <div className='Member-list'>
          { list && this.renderMemberList() }
        </div>
      </div>
    );
  }
}
