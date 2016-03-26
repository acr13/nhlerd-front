import React from 'react';
import { connect } from 'react-redux';

import {getPlayerStats} from '../reducers/stats.js';
import DataTable from '../components/datatable/DataTable';

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

export class PlayerStats extends React.Component {

  componentDidMount() {
    const { apiGetPlayerStats } = this.props;
    apiGetPlayerStats();
  }

  render() {
    const { stats } = this.props;

    return (
      <div>
        <DataTable data={stats} />
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerStats);
