import { connect } from 'react-redux';

import { getResources, getFeaturedPlaylists, getNewReleases } from 'selectors';

const mapStateToProps = state => ({
  resources: getResources(state),
  featured: getFeaturedPlaylists(state),
  releases: getNewReleases(state),
});

const mapDispatchToProps = dispatch => ({
  fetchResources() {
    dispatch({ type: 'FETCH_RESOURCES_REQUEST' });
  },
  fetchFeaturedPlaylists() {
    dispatch({ type: 'FETCH_FEATURED_PLAYLISTS_REQUEST' });
  },
  fetchNewReleases() {
    dispatch({ type: 'FETCH_NEW_RELEASES_REQUEST' });
  }
});

export default function use(Component) {
  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Component);
}

use.mapStateToProps = mapStateToProps;
use.mapDispatchToProps = mapDispatchToProps;
