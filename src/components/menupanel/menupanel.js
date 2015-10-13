'use strict';

import React from 'react';

import {TEAM_LIST} from './team-list';

export default class MenuPanel extends React.Component {

  render() {

    var { selectedMenu } = this.props;

    var menuOpts = [
      {
        value: 'Stats',
        path: '/stats'
      }
    ];

    var options = menuOpts.map( (menuStr, index) => {
      return (
        <li key={index} className={selectedMenu === menuStr.path ? 'active' : ''}
          onClick={this.handleMenuClick.bind(null, menuStr.value)}>
          <a href="#">{menuStr.value}</a>
        </li>
      );
    });

    var teams = TEAM_LIST.map( (team, index) => {
      return (
        <li key={index}
          className={selectedMenu === team.shortForm ? 'active' : ''}
          onClick={this.handleMenuClick.bind(null, team.shortForm)}>
          <a href="#">{team.label}</a>
        </li>
      );
    });

    return (
      <ul className="nav of nav-stacked">
        <li className='tq'>
          Menu
        </li>
        {options}

        <li className='tq'>
          Teams
        </li>
        {teams}
      </ul>
    );
  }

  handleMenuClick = (menuStr) => {
    var { onMenuClick } = this.props;
    onMenuClick(menuStr);
  };

}
