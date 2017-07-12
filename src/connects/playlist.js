import { connect } from 'react-redux';

import { getPlaylist, getPlaylistTracks } from 'selectors';

const mapStateToProps = (state, { match: { params: { playlistId } } }) => ({
  playlist: getPlaylist(state, playlistId),
  tracks: getPlaylistTracks(state, playlistId),
});

const mapDispatchToProps = (dispatch, { match: { params: { userId, playlistId } } }) => ({
  fetchPlaylist() {
    dispatch({ type: 'FETCH_PLAYLIST_REQUEST', payload: { userId, playlistId } });
  },
});

export default function use(Component) {
  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Component);
}

use.mapStateToProps = mapStateToProps;
use.mapDispatchToProps = mapDispatchToProps;
