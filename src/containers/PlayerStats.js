import React from 'react';
import { connect } from 'react-redux';

import {getPlayerStats} from '../reducers/stats.js';

function mapStateToProps(state) {
  return {
    stats: state.stats.get('player_stats')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    apiGetPlayerStats: () => dispatch(getPlayerStats())
  };
}

const wrapperStyle = {
  padding: '4rem'
};

export class PlayerStats extends React.Component {

  componentDidMount() {
    const { apiGetPlayerStats } = this.props;
    apiGetPlayerStats();
  }

  render() {
    const { stats } = this.props;

    return (
      <div style={wrapperStyle}>
        <p>{'Stats'}</p>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerStats);
