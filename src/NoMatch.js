import React from 'react';

import { Container, Intro } from 'components/Errors';
import { Heading } from 'components/Typography';

export const NoMatch = () => (
  <Container>
    <Heading color="#90949C" weight="700" >Whoops</Heading>
    <Intro>We couldn’t find the page you were looking for.</Intro>
  </Container>
);

export default NoMatch;
