import React, { Component } from 'react';

import Header from 'components/Header';
import MainSection from 'components/MainSection';
import Navigation from 'components/Navigation';
import NavLogo from 'components/NavLogo';
import NavList from 'components/NavList';
import NavItem from 'components/NavItem';

import Container from 'components/Container';
import Footer from 'components/Footer';

import CardList from 'components/CardList';
import Card, { CardHero, CardBody, CardFooter, CardFooterItem, CardAvatar } from 'components/Card';

import { Heading, Title, Text } from 'components/Typography';
import { H3 } from 'components/Primitives';

import useResources from 'connects/resources';

class App extends Component {

  componentDidMount() {
    this.props.fetchResources();
  }

  renderResource({ image, title, description, tags, id }) {
    return (
      <Card key={id}>
        <CardHero src={image} />
        <CardBody>
          <Title>{title}</Title>
          <Text>{description}</Text>
        </CardBody>
        <CardFooter>
          <CardFooterItem main>{tags[0]}</CardFooterItem>
          <CardFooterItem>{tags[1]}</CardFooterItem>
        </CardFooter>
      </Card>
    );
  }

  renderArticle({ image, title, description, tags, id, avatar }) {
    return (
      <Card artical key={id}>
        <CardBody>
          <CardAvatar src={avatar} />
          <Title>{title}</Title>
          <Text>{description}</Text>
        </CardBody>
        <CardHero src={image} />
        <CardFooter>
          <CardFooterItem main>{tags[0]}</CardFooterItem>
          <CardFooterItem>{tags[1]}</CardFooterItem>
        </CardFooter>
      </Card>
    );
  }

  renderList() {
    return this.props.resources.map(resource => {
      const { type } = resource;

      switch (type) {
        case 'article':
          return this.renderArticle(resource);
        case 'resource':
        default:
          return this.renderResource(resource);
      }
    });
  }

  render() {
    return (
      <div>
        <Navigation>
          <NavLogo>Design</NavLogo>
          <NavList>
            <NavItem>Articles</NavItem>
            <NavItem>Videos</NavItem>
            <NavItem>Resources</NavItem>
            <NavItem>Careers</NavItem>
          </NavList>
        </Navigation>
        <MainSection>
          <Header>
            <Heading>What’s on our mind?</Heading>
            <H3>Collection of articles, videos, and resources made by designers at Facebook.</H3>
          </Header>
          <Container>
            <CardList>
              {this.renderList()}
            </CardList>
          </Container>
        </MainSection>
        <Footer>
        </Footer>
      </div>
    );
  }
}

export default useResources(App);
