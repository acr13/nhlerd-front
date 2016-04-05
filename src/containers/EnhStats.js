import React from 'react';
import { connect } from 'react-redux';

import { getPlayerEnhStats } from '../reducers/stats.js';
import EnhStatsTable from '../components/tables/EnhStatsTable.js';

function mapStateToProps(state) {
  return {
    stats: state.stats.get('player_enh_stats')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    apiGetPlayerEnhStats: () => dispatch(getPlayerEnhStats())
  };
}

const wrapperStyle = {
  backgroundColor: '#FFFFFF',
  borderRadius: '3px',
  boxShadow: '0px 2px 4px #4A4A4A',
  borderTop: '3px solid #3498DB',
  padding: '1rem',
  marginBottom: '2rem',
  marginTop: '2rem'
};

export class EnhStats extends React.Component {

  componentDidMount() {
    const { apiGetPlayerEnhStats } = this.props;
    apiGetPlayerEnhStats();
  }

  render() {
    const { stats } = this.props;

    return (
      <div style={wrapperStyle}>

        <div className="card">
          <EnhStatsTable stats={stats} />
        </div>

      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(EnhStats);
