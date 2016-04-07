import React from 'react';

export default class StatsTable extends React.Component {

  render() {
    const { stats } = this.props;

    const rows = stats.slice(0, 30).map((player) => {
      return (
        <tr key={player.get('_id')}>
          <td>{player.get('playerName')}</td>
          <td>{player.get('playerTeamsPlayedFor')}</td>
          <td>{player.get('playerPositionCode')}</td>
          <td>{player.get('gamesPlayed')}</td>
          <td>{player.get('goals')}</td>
          <td>{player.get('assists')}</td>
          <td>{player.get('points')}</td>
          <td>{player.get('plusMinus')}</td>
          <td>{player.get('penaltyMinutes')}</td>
        </tr>
      );
    });

    return (
      <table>
        <thead>
          <tr>
            <td>{'Player'}</td>
            <td>{'Team'}</td>
            <td>{'Pos'}</td>
            <td>{'GP'}</td>
            <td>{'G'}</td>
            <td>{'A'}</td>
            <td>{'P'}</td>
            <td>{'+/-'}</td>
            <td>{'PIM'}</td>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );

  }

}
