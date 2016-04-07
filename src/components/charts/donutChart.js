import React from 'react';
import d3 from 'd3';

import Chart from './common/chart.js';

export default class DonutChart extends React.Component {

  // convert a percentage (of the pi chart, starting at 12 o'clock) to radians
  convertValue(value) {
    return (value / 100) * 2 * Math.PI;
  }

  // generate the 'slice' of pi
  generateArc(width, radius, startAngle) {
    return d3.svg.arc()
      .innerRadius(radius - 100)
      .outerRadius(radius - 50)
      .startAngle(this.convertValue(startAngle));
  }

  render() {
    const { height, width, radius } = this.props;

    var color = d3.scale.category20();

    return (
      <Chart height={height}
          width={width}
      >
        <path d={this.generateArc(width, radius, 0)({endAngle: this.convertValue(50)})}
            fill={color(0)}
        >
        </path>
        <path d={this.generateArc(width, radius, 50)({endAngle: this.convertValue(100)})}
            fill={color(1)}
        >
        </path>
      </Chart>
    );

  }

}
