import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

/* Routes */
// import { HOME_ROUTE } from '../reducers/router.js';

/* Containers */

function mapStateToProps(state) {
  return {
    route: state.router.get('route')
  };
}

function mapDispatchToProps() {
  return {};
}

const nav = {
  width: '100px'
};


class MenuBar extends Component {

  render() {
    // const { route } = this.props;

    return (
      <div style={nav}>
        <div>{'Stats'}</div>
        <div>{'Games'}</div>
      </div>
    );
  }
}

MenuBar.propTypes = {
  route: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
