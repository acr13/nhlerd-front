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
          <td>{player.get('shotAttemptsFor')}</td>
          <td>{player.get('shotAttemptsAgainst')}</td>
          <td>{player.get('shotAttempts')}</td>
          <td>{(parseFloat(player.get('shotAttemptsRelPctg')) * 100).toFixed(1)}</td>
          <td>{player.get('shotAttemptsRelPer60Minutes').toFixed(1)}</td>
          <td>{player.get('shotAttemptsTied')}</td>
          <td>{player.get('shotAttemptsAhead')}</td>
          <td>{player.get('shotAttemptsBehind')}</td>
          <td>{player.get('shotAttemptsClose')}</td>
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
            <td>{'SAT For'}</td>
            <td>{'SAT Agst'}</td>
            <td>{'SAT'}</td>
            <td>{'SAT Rel%'}</td>
            <td>{'SAT Rel60'}</td>
            <td>{'SAT Tied'}</td>
            <td>{'SAT Ahead'}</td>
            <td>{'SAT Behind'}</td>
            <td>{'SAT Close'}</td>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );

  }

}
