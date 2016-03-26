import { fromJS } from 'immutable';

import {apiGetPlayerStats} from '../api/stats.js';

/* Constants */
const REQUEST_PLAYER_STATS = 'REQUEST_PLAYER_STATS';
const RESOLVE_REQUEST_PLAYER_STATS = 'RESOLVE_REQUEST_PLAYER_STATS';
const REJECT_REQUEST_PLAYER_STATS = 'REJECT_REQUEST_PLAYER_STATS';

const TEST_ACTION = 'TEST_ACTION';

/* Reducer */

const INITIAL_STATE = fromJS({
  player_stats: []
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

    default:
      return state;
  }
}

export default statsReducer;

/* Actions */

export function getPlayerStats2() {
  console.log('wtf');
  return { type: TEST_ACTION, payload: 'WTF' };
}

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
