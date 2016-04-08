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
          <td>{parseFloat(player.get('pointsPerGame')).toFixed(2)}</td>
          <td>{player.get('shots')}</td>
          <td>{(parseFloat(player.get('shootingPctg')) * 100).toFixed(1)}</td>
          <td>{(parseFloat(player.get('timeOnIcePerGame')) / 60).toFixed(2)}</td>
          <td>{parseFloat(player.get('shiftsPerGame')).toFixed(1)}</td>
          <td>{(parseFloat(player.get('faceoffWinPctg')) * 100).toFixed(1)}</td>
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
            <td>{'P/GP'}</td>
            <td>{'S'}</td>
            <td>{'S%'}</td>
            <td>{'TOI/GP'}</td>
            <td>{'Shifts/GP'}</td>
            <td>{'FOW%'}</td>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );

  }

}
