import { connect } from 'react-redux';

import { getResources, getFeaturedPlaylists, isLoggedIn } from 'selectors';

const mapStateToProps = state => ({
  resources: getResources(state),
  featured: getFeaturedPlaylists(state),
  loggedIn: isLoggedIn(state),
});

const mapDispatchToProps = dispatch => ({
  fetchFeaturedPlaylists() {
    dispatch({ type: 'FETCH_FEATURED_PLAYLISTS_REQUEST' });
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
