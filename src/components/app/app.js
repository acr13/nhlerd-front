import React from 'react';
import axios from 'axios';

import DataTable from '../datatable/datatable';
import GameTable from '../gametable/gametable';
import MenuPanel from '../menupanel/menupanel';

import Loader from '../loader/loader';

import {TEAM_LIST} from '../menupanel/team-list';

export default class App extends React.Component {

  baseUrl = 'https://guarded-escarpment-1147.herokuapp.com/api/v1/';

  state = {
    path: '',
    stats: [],
    loading: true
  };

  componentWillMount = () => {
    this._showLoader();
    this._getTonightsMatchups();
  };

  _getTonightsMatchups = () => {
    axios.get(this.baseUrl + 'games')
      .then((resp) => {
        this.setState({
          path: '/games',
          stats: [],
          games: resp.data,
          loading: false
        });
        console.log(resp);
      });
  };

  _getStats = () => {
    axios.get(this.baseUrl + 'stats')
      .then((resp) => {
        this.setState({
          path: '/stats',
          stats: resp.data.data,
          games: [],
          loading: false
        });
      });
  };

  _showTeamStats = (teamShortForm) => {
    axios.get(this.baseUrl + 'stats/team/' + teamShortForm)
      .then((resp) => {
        this.setState({
          path: teamShortForm,
          stats: resp.data.data,
          games: [],
          loading: false
        });
      });
  };

  _showLoader = () => {
    this.setState({
      path: '',
      stats: [],
      games: [],
      loading: true
    });
  };

  _menuClick = (type) => {
    if (type === 'Games') {
      this._showLoader();
      this._getTonightsMatchups();
    } else if (type === 'Stats') {
      this._showLoader();
      this._getStats();
    } else if (this._teamIsSelected(type)) {
      // if any team is clicked (only 1..) then show the team stats
      this._showLoader();
      this._showTeamStats(type);
    }
  };

  _teamIsSelected = (type) => {
    return TEAM_LIST.filter( (team) => { return team.shortForm === type;} ).length > 0;
  };

  render() {
    var { path, games, stats } = this.state;

    var rightPanel = <div></div>

    if (path === '/games') {
      rightPanel = <GameTable data={games}></GameTable>
    }
    else if (path === '/stats' || this._teamIsSelected(path)) {
      rightPanel = <DataTable data={stats}></DataTable>
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

        <Loader show={this.state.loading}></Loader>
      </div>
    );
  };
}
