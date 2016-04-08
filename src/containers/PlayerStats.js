import React from 'react';
import { connect } from 'react-redux';

import { getPlayerStats } from '../reducers/stats.js';
import StatsTable from '../components/tables/StatsTable.js';

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
  backgroundColor: '#FFFFFF',
  borderRadius: '3px',
  boxShadow: '0px 2px 4px #4A4A4A',
  borderTop: '3px solid #3498DB',
  padding: '1rem',
  marginBottom: '2rem',
  marginTop: '2rem'
};

const cardStyle = {
  display: 'flex',
  justifyContent: 'center'
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

        <div className="card"
            style={cardStyle}
        >
          <StatsTable stats={stats} />
        </div>

      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerStats);
