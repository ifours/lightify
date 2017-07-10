import { connect } from 'react-redux';

import { getPlaylist } from 'selectors';

const mapStateToProps = (state, { match: { params: { id } } }) => ({
  playlist: getPlaylist(state, id),
});

const mapDispatchToProps = (dispatch, { match: { params: { id } } }) => ({
  fetchPlaylist() {
    dispatch({ type: 'FETCH_PLAYLIST_REQUEST', payload: { id } });
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
