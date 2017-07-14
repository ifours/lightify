import React, { Component } from 'react';
import { Redirect } from 'react-router';
import qs from 'qs';

import { dispatch } from 'store';

export default class Callback  extends Component {

  componentDidMount() {
    const { location: { hash, search } } = this.props;
    const { error } = qs.parse(search, { ignoreQueryPrefix: true });
    const { access_token: accessToken, expires_in: expiresIn } = qs.parse(hash.replace('#', ''));

    if (error) return;

    const payload = { date: Date.now(), accessToken, expiresIn: parseInt(expiresIn, 10) };

    sessionStorage.setItem('session', JSON.stringify(payload));
    dispatch({ type: 'AUTH_TOKEN_RECEIVE', payload });
  }

  render() {
    return <Redirect to="/" />
  }
}
