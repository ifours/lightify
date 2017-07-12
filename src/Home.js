import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/Header';

import Container from 'components/Container';

import CardList from 'components/CardList';
import PlaylistCard from 'components/Playlist/Card';

import { Heading } from 'components/Typography';
import { H3 } from 'components/Primitives';

import useResources from 'connects/resources';

class Home extends Component {

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
