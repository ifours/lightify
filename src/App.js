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

import Repository from 'services/Repository';

class App extends Component {

  componentDidMount() {
    const { loggedIn, fetchFeaturedPlaylists, fetchNewReleases } = this.props;

    if (loggedIn) {
      fetchFeaturedPlaylists();
      fetchNewReleases();
    } else {
      Repository.authorize();
    }
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

  renderFeatured(playlist) {
    const { id, images, name } = playlist;
    const { url } = images[0];

    return (
      <Card key={id}>
        <CardHero src={url} />
        <CardBody>
          <Title>{name}</Title>
          {/* <Text>{description}</Text> */}
        </CardBody>
        <CardFooter>
          <CardFooterItem main>Trending</CardFooterItem>
          <CardFooterItem>New</CardFooterItem>
        </CardFooter>
      </Card>
    );
  }

  renderFeaturedList() {
    const { featured: { playlists: { items } } } = this.props;

    return items.map(playlist => this.renderFeatured(playlist));
  }

  renderRelease(album) {
    const { id, images, name } = album;
    const { url } = images[0];

    return (
      <Card key={id}>
        <CardHero src={url} />
        <CardBody>
          <Title>{name}</Title>
          {/* <Text>{description}</Text> */}
        </CardBody>
        <CardFooter>
          <CardFooterItem main>Trending</CardFooterItem>
          <CardFooterItem>New</CardFooterItem>
        </CardFooter>
      </Card>
    );
  }

  renderReleasesList() {
    return this.props.releases.map(album => this.renderRelease(album));
  }

  render() {
    const { featured: { message = 'What’s on our mind?' } } = this.props;

    return (
      <div>
        <Navigation>
          <NavLogo>Lightify</NavLogo>
          <NavList>
            <NavItem>Featured</NavItem>
            <NavItem>Genres & Moods</NavItem>
            <NavItem>New Releases</NavItem>
            <NavItem>Discover</NavItem>
          </NavList>
        </Navigation>
        <MainSection>
          <Header>
            <Heading>{message}</Heading>
            <H3>Collection of playlists, tracks, and resources made by makers at Spotify.</H3>
          </Header>
          <Container>
            <CardList>
              {this.renderFeaturedList()}
            </CardList>
          </Container>
          <Header>
            <Heading>New realess</Heading>
            <H3>Every days new music by Spotify.</H3>
          </Header>
          <Container>
            <CardList>
              {this.renderReleasesList()}
            </CardList>
          </Container>
          {/* <Container>
            <CardList>
              {this.renderList()}
            </CardList>
          </Container> */}
        </MainSection>
        <Footer>
        </Footer>
      </div>
    );
  }
}

export default useResources(App);
