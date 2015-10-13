import React from 'react';
import axios from 'axios';

import DataTable from '../datatable/datatable';
import Loader from '../loader/loader';
import MenuPanel from '../menupanel/menupanel';
import {TEAM_LIST} from '../menupanel/team-list';

export default class App extends React.Component {

  baseUrl = 'https://guarded-escarpment-1147.herokuapp.com/api/v1/';

  state = {
    path: '/',
    stats: [],
    loading: false
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

  _loader = () => {
    this.setState({
      path: '',
      stats: [],
      loading: true
    });
  };

  _showTeams = (teamShortForm) => {
    axios.get(this.baseUrl + 'stats/team/' + teamShortForm)
      .then((resp) => {
        this.setState({
          path: teamShortForm,
          stats: resp.data.data,
          loading: false
        });
      });
  };

  _menuClick = (type) => {
    if (type === 'Stats') {
      this._loader();
      this._getStats();
    } else if (TEAM_LIST.filter( (team) => { return team.shortForm === type;} ).length > 0) {
      this._loader();
      this._showTeams(type);
    }
  };

  render() {
    var { path, stats } = this.state;

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
          <DataTable data={stats}></DataTable>
        </div>
        <Loader show={this.state.loading}></Loader>
      </div>
    );
  };
}
