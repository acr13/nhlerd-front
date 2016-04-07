import React from 'react';
import { findDOMNode } from 'react-dom';
import { is } from 'immutable';
import d3 from 'd3';

const styles = {
  base: {
    fill: 'none',
    strokeWidth: '1px'
  }
};

export default class Path extends React.Component {

  componentDidMount() {
    const elem = findDOMNode(this);
    const { reading } = this.props;
    const { line } = this;

    d3.select(elem)
      .datum(reading.toJS())
      .attr('d', line.bind(this));
  }

  componentWillReceiveProps(nextProps) {
    const elem = findDOMNode(this);
    const { reading, defaultTickTime } = this.props;
    const { line } = this;

    // Update the line if the values change
    if (!is(nextProps.reading, reading)) {
      d3.select(elem)
        .datum(reading.toJS())
        .transition()
          .ease('linear')
          .duration(defaultTickTime)
          .attr('d', line.bind(this));
    }
  }

  getX() {
    return d3.scale.linear()
             .domain([0, this.props.reading.size - 1])
             .range([0, this.props.width]);
  }

  line = d3.svg.line()
           .x((d, i) => this.getX()(i))
           .y((d) => this.props.y(d))

  render() {
    const { style } = this.props;

    return (
      <path style={{ ...style, ...styles.base }}></path>
    );
  }

}
