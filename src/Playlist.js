import React, { Component } from 'react';

import { Header, HeaderImage, HeaderDetails } from 'components/Playlist/Header';
import Container from 'components/Container';

import { Heading } from 'components/Typography';

import usePlaylist from 'connects/playlist';

export class Playlist extends Component {
  componentDidMount() {
    this.props.fetchPlaylist();
  }
  render() {
    const { playlist } = this.props;
    const { images, name } = playlist;
    const { url } = images[0];

    return (
      <Container>
        <Header>
          <HeaderImage src={url} />
          <HeaderDetails>
            <Heading>{name}</Heading>
          </HeaderDetails>
        </Header>
      </Container>
    );
  }
}

export default usePlaylist(Playlist);
