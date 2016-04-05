import { fromJS } from 'immutable';

import {apiGetPlayerStats, apiGetPlayerEnhStats} from '../api/stats.js';

/* Constants */
const REQUEST_PLAYER_STATS = 'REQUEST_PLAYER_STATS';
const RESOLVE_REQUEST_PLAYER_STATS = 'RESOLVE_REQUEST_PLAYER_STATS';
const REJECT_REQUEST_PLAYER_STATS = 'REJECT_REQUEST_PLAYER_STATS';

const REQUEST_PLAYER_ENH_STATS = 'REQUEST_PLAYER_ENH_STATS';
const RESOLVE_REQUEST_PLAYER_ENH_STATS = 'RESOLVE_REQUEST_PLAYER_ENH_STATS';
const REJECT_REQUEST_PLAYER_ENH_STATS = 'REJECT_REQUEST_PLAYER_ENH_STATS';

/* Reducer */

const INITIAL_STATE = fromJS({
  player_stats: [],
  player_enh_stats: []
});

function statsReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {

    case REQUEST_PLAYER_STATS:
      return state.merge(fromJS({
        player_stats: []
      }));

    case RESOLVE_REQUEST_PLAYER_STATS:
      return state.merge(fromJS({
        player_stats: action.payload
      }));

    case REJECT_REQUEST_PLAYER_STATS:
      return state.merge(fromJS({
        player_stats: []
      }));

    case REQUEST_PLAYER_ENH_STATS:
      return state.merge(fromJS({
        player_enh_stats: []
      }));

    case RESOLVE_REQUEST_PLAYER_ENH_STATS:
      return state.merge(fromJS({
        player_enh_stats: action.payload
      }));

    case REJECT_REQUEST_PLAYER_ENH_STATS:
      return state.merge(fromJS({
        player_enh_stats: []
      }));

    default:
      return state;
  }
}

export default statsReducer;

/* Actions */

export function getPlayerStats() {
  return (dispatch) => {

    dispatch({
      types: [
        REQUEST_PLAYER_STATS,
        RESOLVE_REQUEST_PLAYER_STATS,
        REJECT_REQUEST_PLAYER_STATS
      ],
      payload: {
        promise: apiGetPlayerStats()
          .then((res) => {
            return res.data;
          })
      }
    });
  };
}

export function getPlayerEnhStats() {
  return (dispatch) => {

    dispatch({
      types: [
        REQUEST_PLAYER_ENH_STATS,
        RESOLVE_REQUEST_PLAYER_ENH_STATS,
        REJECT_REQUEST_PLAYER_ENH_STATS
      ],
      payload: {
        promise: apiGetPlayerEnhStats()
          .then((res) => {
            return res.data;
          })
      }
    });
  };
}
