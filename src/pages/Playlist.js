import React, { Component } from 'react';
import MdSchedule from 'react-icons/lib/md/schedule';

import { Text } from 'components/Typography';
import Container from 'components/Playlist/Container';
import TrackItem from 'components/Playlist/TrackItem';
import TrackList from 'components/Playlist/TrackList';
import PlaylistCard from 'components/Playlist/Card';
import Loading from 'components/Loading';
import usePlaylist from 'connects/playlist';

import trackDuration from 'utils/track-duration';

export class Playlist extends Component {

  componentDidMount() {
    this.props.fetchPlaylist();
  }

  componentWillUnmount() {
    this.pauseAudio();
  }

  onTrackClick = (url) => {
    this.pauseAudio();

    this.audio = new Audio(url);
    this.audio.play();
  }

  pauseAudio() {
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }
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

    if (!playlist) return <Loading />;

    return (
      <Container>
        <PlaylistCard playlist={playlist} disabled />
        <TrackList>
          {tracks.length !== 0 ? tracks.map(this.renderTrack, this) : <Loading />}
        </TrackList>
      </Container>
    );
  }
}

export default usePlaylist(Playlist);
