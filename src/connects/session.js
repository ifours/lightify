import { connect } from 'react-redux';

import { isLoggedIn } from 'selectors';

const mapStateToProps = state => ({
  loggedIn: isLoggedIn(state),
});

const mapDispatchToProps = dispatch => ({
  authorize() {
    dispatch({ type: 'AUTHORIZE_REQUEST' });
  },

  persistToken(payload) {
    dispatch({ type: 'AUTH_TOKEN_RECEIVE', payload });
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
