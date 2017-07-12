import React, { Component } from 'react';
import MdSchedule from 'react-icons/lib/md/schedule';

import { Text } from 'components/Typography';

import Container from 'components/Playlist/Container';
import TrackItem from 'components/Playlist/TrackItem';
import PlaylistCard from 'components/Playlist/Card';
import usePlaylist from 'connects/playlist';

function trackDuration(millis) {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

export class Playlist extends Component {

  componentDidMount() {
    this.props.fetchPlaylist();
  }

  onTrackClick = (url) => {
    if (this.audio) {
      this.audio.pause();
    }

    this.audio = new Audio(url);
    this.audio.play();
  }

  renderTrack(track, index) {
    const { id, name, duration_ms, preview_url } = track;

    return (
      <TrackItem key={id} onClick={() => this.onTrackClick(preview_url)}>
        <Text>{index + 1} - {name}</Text>
        <div>
          <Text><MdSchedule /> {trackDuration(duration_ms)}</Text>
        </div>
      </TrackItem>
    );
  }

  render() {
    const { playlist, tracks } = this.props;

    if (!playlist) return null;

    return (
      <Container>
        <PlaylistCard playlist={playlist} disabled />
        <ul style={{ paddingTop: 20, paddingRight: 20, flex: 1 }}>
          {tracks.length !== 0 && tracks.map(this.renderTrack, this)}
        </ul>
      </Container>
    );
  }
}

export default usePlaylist(Playlist);
