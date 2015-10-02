import React from 'react';

export default class MenuPanel extends React.Component {

  render() {
    var { selectedMenu } = this.props;

    var menuOpts = [
      {
        value: 'Stats',
        path: '/stats'
      }, {
        value: 'Teams',
        path: '/teams'
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

    return (
      <ul className="nav of nav-stacked">
        <li className='tq'>
          Menu
        </li>
        {options}
      </ul>
    );
  }

  handleMenuClick = (menuStr) => {
    var { onMenuClick } = this.props;
    onMenuClick(menuStr);
  };

}
