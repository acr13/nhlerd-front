import React from 'react';

const Chart = ({ children, width, height }) => {
  return (
    <svg height={height}
        width={width}
    >
      <g transform={'translate(' + height / 2 + ', ' + height / 2 + ')'}>
        {children}
      </g>
    </svg>
  );
};

export default Chart;
