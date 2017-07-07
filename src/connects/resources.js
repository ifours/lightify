import { connect } from 'react-redux';

import { getResources } from 'selectors';

const mapStateToProps = state => ({
  resources: getResources(state)
});

const mapDispatchToProps = dispatch => ({
  fetchResources() {
    dispatch({ type: 'FETCH_RESOURCES_REQUEST' });
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
