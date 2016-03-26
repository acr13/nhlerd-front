import React from 'react';

export default class DataTable extends React.Component {

  render() {
    const { data } = this.props;

    console.log(data);

    const rows = data.map((row) => {
      return (
        <div>
          <span>{row.get('playerName')}</span>
          <span>{row.get('goals')}</span>
          <span>{row.get('assists')}</span>
          <span>{row.get('points')}</span>
        </div>
      );
    });

    return (
      <div>{rows}</div>
    );
  }

}
