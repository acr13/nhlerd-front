import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

/* Routes */
import { changeRoute, ENHANCED_ROUTE, HOME_ROUTE, GAMES_ROUTE } from '../reducers/router.js';

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

const navStyle = {
  backgroundColor: '#FFFFFF',
  minHeight: '32px',
  padding: '24px',
  borderBottom: '1px solid #BDC3C7',
  display: 'flex'
};

const logoStyle = {
  width: '6rem',
  marginRight: '20px'
};

const routeStyle = {
  cursor: 'pointer',
  marginRight: '10px',
  height: '16px'
};

const ROUTES = [{
  label: 'Games',
  route: GAMES_ROUTE
}, {
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
      let selected = route === r.route ? 'selected-route' : '';

      return (
        <div className={selected}
            onClick={() => {
              onRouteChange(r.route);
            }}
            style={routeStyle}
        >
          {r.label}
        </div>
      );
    });

    return (
      <div style={navStyle}>
        <div style={logoStyle}>{'NHLerd'}</div>
        {routes}
      </div>
    );
  }
}

MenuBar.propTypes = {
  route: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
