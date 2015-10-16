import React from 'react';
import Chart from 'chart.js';
import {Doughnut} from 'react-chartjs';

export default class GameTable extends React.Component {

  render() {

    var { data } = this.props;

    var games = data.map( (game) => {
      var chartData = [{
        value: 50,
        color: 'blue'
      }, {
        value: 50,
        color: 'green'
      }];
      var chartOptions = {};

      return (
        <div className='game-wrapper'>
          <Doughnut data={chartData} options={chartOptions} width='200' height='200'/>
        </div>
      );
    });

    return (
      <div className='game-list'>
        {games}
      </div>
    );

  }

}