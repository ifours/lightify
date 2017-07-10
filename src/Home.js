import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/Header';

import Container from 'components/Container';

import CardList from 'components/CardList';
import Card, { CardHero, CardBody, CardFooter, CardFooterItem } from 'components/Card';

import { Heading, Title } from 'components/Typography';
import { H3 } from 'components/Primitives';

import useResources from 'connects/resources';

import Repository from 'services/Repository';

class Home extends Component {

  componentDidMount() {
    const { loggedIn, fetchFeaturedPlaylists } = this.props;

    if (loggedIn) {
      fetchFeaturedPlaylists();
    } else {
      Repository.authorize();
    }
  }

  renderFeatured(playlist) {
    const { id, images, name } = playlist;
    const { url } = images[0];

    return (
      <Link key={id} to={`playlists/${id}`}>
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
      </Link>
    );
  }

  renderFeaturedList() {
    const { featured: { playlists: { items } } } = this.props;

    return items.map(playlist => this.renderFeatured(playlist));
  }

  render() {
    const { featured: { message = 'What’s on our mind?' } } = this.props;

    return (
      <div>
        <Header>
          <Heading>{message}</Heading>
          <H3>Collection of playlists, tracks, and resources made by makers at Spotify.</H3>
        </Header>
        <Container>
          <CardList>
            {this.renderFeaturedList()}
          </CardList>
        </Container>
      </div>
    );
  }
}

export default useResources(Home);
