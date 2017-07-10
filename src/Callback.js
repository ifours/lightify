import React, { Component } from 'react';
import { Redirect } from 'react-router'

import { dispatch } from 'store';

export default class Callback  extends Component {

  componentDidMount() {
    // TODO: handle error
    const token = this.props.location.hash.split('&')[0].split('=')[1];
    dispatch({ type: 'AUTH_TOKEN_RECEIVE', payload: token });
  }

  render() {
    return <Redirect to="/" />
  }
}
