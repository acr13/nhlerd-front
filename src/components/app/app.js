import React from 'react';
import axios from 'axios';

import DataTable from '../datatable/datatable';
import MenuPanel from '../menupanel/menupanel';

export default class App extends React.Component {

  baseUrl = 'https://guarded-escarpment-1147.herokuapp.com/api/v1/';

  state = {
    path: '/',
    stats: [],
    loading: true
  };

  _getStats = () => {
    axios.get(this.baseUrl + 'stats')
      .then((resp) => {

        this.setState({
          path: '/stats',
          stats: resp.data.data,
          loading: false
        });

      });
  };

  _showTeams = () => {
    this.setState({
      path: '/teams',
      stats: [],
      loading: false
    });
  }

  _menuClick = (type) => {
    if (type === 'Stats') {
      this._getStats();
    } else if (type === 'Teams') {
      this._showTeams();
    }
  };

  render() {
    var { path, stats } = this.state;

    if (path === '/stats') {
      var rightPanel = (
        <DataTable data={stats}></DataTable>
      );
    }

    return (
      <div className='wrapper'>
        <div className='app'>
          <h2>{this.props.children}</h2>
        </div>

        <div className='left panel'>
          <MenuPanel onMenuClick={this._menuClick}
            selectedMenu={this.state.path}>
          </MenuPanel>
        </div>


        <div className='right panel'>
          {rightPanel}
        </div>
      </div>
    );
  };
}
