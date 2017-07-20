import React, { Component } from 'react';

import { Container, Button, Intro } from 'components/Landing';
import { Heading } from 'components/Typography';

export default class Landing extends Component {

  onClick = () => {
    this.props.authorize();
  }

  render() {
    return (
      <Container>
        <Heading light bold >New experience for your lovely Spotify</Heading>
        <Intro>This demo explores the possibilities with the Web API. To view this demo you need to sign in with your spotify account.</Intro>
        <Button onClick={this.onClick}>Get Started</Button>
      </Container>
    )
  }
}
