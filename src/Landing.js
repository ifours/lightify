import React, { Component } from 'react';

import { Container, Button, Brand, Intro } from 'components/Landing';
import { Heading } from 'components/Typography';

import useSession from 'connects/session';

export class Landing extends Component {

  onClick = () => {
    this.props.authorize();
  }

  render() {
    return (
      <Container>
        <Brand>Lightify</Brand>
        <Heading color="#1e3264" weight="700" >New experience for your lovely Spotify</Heading>
        <Intro>This demo explores the possibilities with the Web API. To view this demo you need to sign in with your spotify account.</Intro>
        <Button onClick={this.onClick}>Get Started</Button>
      </Container>
    )
  }
}

export default useSession(Landing);
