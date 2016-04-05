import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

/* Routes */
import { changeRoute, ENHANCED_ROUTE, HOME_ROUTE } from '../reducers/router.js';

/* Containers */

function mapStateToProps(state) {
  return {
    route: state.router.get('route')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onRouteChange: (route) => dispatch(changeRoute(route))
  };
}

const nav = {
  backgroundColor: '#FFFFFF',
  minHeight: '32px',
  padding: '24px',
  borderBottom: '1px solid #BDC3C7'
};

const ROUTES = [{
  label: 'Stats',
  route: HOME_ROUTE
}, {
  label: 'Enhanced',
  route: ENHANCED_ROUTE
}];

class MenuBar extends Component {

  render() {
    const { onRouteChange, route } = this.props;

    const routes = ROUTES.map((r) => {
      return (
        <div
            onClick={() => {
              onRouteChange(r.route);
            }}
        >
          {r.label}
        </div>
      );
    });

    return (
      <div style={nav}>
        {routes}
      </div>
    );
  }
}

MenuBar.propTypes = {
  route: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
