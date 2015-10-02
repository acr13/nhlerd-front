import React from 'react';

export default class DataTable extends React.Component {

  render() {

    var { data } = this.props;

    if (data.length === 0) {
      return (
        <p>Loading...</p>
      );
    }

    var rows = data.map((player, index) => {
      return (
        <tr key={index}>
          <td>{player.playerFirstName}</td>
          <td>{player.playerLastName}</td>
          <td>{player.playerTeamsPlayedFor}</td>
          <td>{player.playerPositionCode}</td>
          <td>{player.gamesPlayed}</td>
          <td>{player.goals}</td>
          <td>{player.assists}</td>
          <td>{player.points}</td>
          <td>{player.plusMinus}</td>
          <td>{player.penaltyMinutes}</td>
          <td>{player.ppGoals}</td>
          <td>{player.ppPoints}</td>
          <td>{player.shGoals}</td>
          <td>{player.shPoints}</td>
          <td>{player.gameWinningGoals}</td>
          <td>{player.otGoals}</td>
          <td>{player.shots}</td>
          <td>{player.shootingPctg}</td>
          <td>{player.timeOnIcePerGame}</td>
          <td>{player.shiftsPerGame}</td>
          <td>{player.faceoffWinPctg}</td>
        </tr>
      );
    });

    return (
      <div>
        <table>
          {rows}
        </table>
      </div>
    );
  }
}
