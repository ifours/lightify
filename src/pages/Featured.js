import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/Header';
import Container, { Intro } from 'components/Container';
import CardList from 'components/CardList';
import { PlaylistCard } from 'components/Playlist';
import Loading from 'components/Loading';
import { Heading } from 'components/Typography';

import useFeatured from 'connects/featured';

class Featured extends Component {

  componentDidMount() {
    this.props.fetchFeaturedPlaylists();
  }

  renderFeatured(playlist) {
    const { id: playlistId, owner: { id: userId } } = playlist;

    return (
      <Link key={playlistId} to={`users/${userId}/playlists/${playlistId}`}>
        <PlaylistCard playlist={playlist}/>
      </Link>
    );
  }

  renderFeaturedList() {
    const { featured: { playlists: { items } } } = this.props;

    return items.map(playlist => this.renderFeatured(playlist));
  }

  render() {
    const { featured: { message } } = this.props;

    if (!message) return <Loading />;

    return (
      <div>
        <Header>
          <Heading>{message}</Heading>
          <Intro>Collection of playlists which helps you discover the perfect music for every moment!</Intro>
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

export default useFeatured(Featured);
