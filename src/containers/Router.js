import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

/* Routes */
import { ENHANCED_ROUTE, HOME_ROUTE } from '../reducers/router.js';

/* Containers */
import LoadingOverlay from '../components/overlays/loading/loading.js';
import PlayerStats from './PlayerStats.js';
import EnhStats from './EnhStats.js';

function mapStateToProps(state) {
  return {
    isLoading: state.loading.get('loading'),
    route: state.router.get('route')
  };
}

function mapDispatchToProps() {
  return {};
}

const mainStyle = {
  maxWidth: '64em',
  marginLeft: 'auto',
  marginRight: 'auto'
};

class Router extends Component {

  render() {
    const { isLoading, route } = this.props;

    let currentRoute = null;

    switch (route) {
      case HOME_ROUTE:
        currentRoute = <PlayerStats />;
        break;

      case ENHANCED_ROUTE:
        currentRoute = <EnhStats />;
        break;

      default:
        currentRoute = <PlayerStats />;
    }

    return (
      <div style={mainStyle}>
        <LoadingOverlay loading={isLoading} />
        {currentRoute}
      </div>
    );
  }
}

Router.propTypes = {
  route: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
