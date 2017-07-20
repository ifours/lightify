import React, { Component } from 'react';
import { Redirect } from 'react-router';
import qs from 'qs';

import useSession from 'connects/session';

export class Callback extends Component {

  componentDidMount() {
    const { location: { hash, search }, persistToken } = this.props;
    const { error } = qs.parse(search, { ignoreQueryPrefix: true });
    const { access_token: accessToken, expires_in: expiresIn } = qs.parse(hash.replace('#', ''));

    if (error) return;

    persistToken({
      accessToken,
      date: Date.now(),
      expiresIn: parseInt(expiresIn, 10)
    });
  }

  render() {
    return <Redirect to="/" />;
  }
}

export default useSession(Callback);
