import React, { Component } from 'react';

import { Container, Intro } from 'components/Errors';
import { Heading } from 'components/Typography';

export class Fake extends Component {
  render() {
    return (
      <Container>
        <Heading color="#90949C" weight="700" >This page is not ready</Heading>
        <Intro>You can follow me, to stay updated when new pages are available 😉</Intro>
      </Container>
    )
  }
}

export default Fake;
