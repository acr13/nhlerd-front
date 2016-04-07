import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import { getTodaysGames } from '../reducers/games.js';

import DonutChart from '../components/charts/donutChart.js';

function mapStateToProps(state) {
  return {
    games: state.games.get('games')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    apiGetTodaysGames: () => dispatch(getTodaysGames())
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

const teamWrapperStyle = {
  display: 'flex'
};

const teamStyle = {
  height: '4rem',
  width: '10rem',
  marginRight: '2rem'
};

const graphStyle = {
  flexGrow: '1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export class Games extends React.Component {

  componentDidMount() {
    const { apiGetTodaysGames } = this.props;
    apiGetTodaysGames();
  }

  render() {
    const { games } = this.props;

    const gamesHTML = games.map((game) => {
      const away = game.get('teams').get('away');
      const awayRecord = away.get('leagueRecord').get('wins') + ' - '
        + away.get('leagueRecord').get('losses') + ' - '
        + away.get('leagueRecord').get('ot');

      const home = game.get('teams').get('home');
      const homeRecord = home.get('leagueRecord').get('wins') + ' - '
        + home.get('leagueRecord').get('losses') + ' - '
        + home.get('leagueRecord').get('ot');

      return (
        <div key={game.get('gamePk')}
            style={wrapperStyle}
        >
          <div>{moment(game.get('gameDate')).format('h:mm A')}</div>

          <div style={teamWrapperStyle}>
            <div style={teamStyle}>
              <div>{away.get('team').get('name')}</div>
              <div>{awayRecord}</div>
            </div>
            <div style={teamStyle}>
              <div>{home.get('team').get('name')}</div>
              <div>{homeRecord}</div>
            </div>
            <div style={graphStyle}>
              <DonutChart height={300}
                  radius={150}
                  width={460}
              />
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>{gamesHTML}</div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Games);
