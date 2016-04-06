import { fromJS } from 'immutable';

import { apiGetTodaysGames } from '../api/games.js';

/* Constants */
const REQUEST_TODAY_GAMES = 'REQUEST_TODAY_GAMES';
const RESOLVE_TODAY_GAMES = 'RESOLVE_TODAY_GAMES';
const REJECT_TODAY_GAMES = 'REJECT_TODAY_GAMES';

/* Reducer */

const INITIAL_STATE = fromJS({
  games: []
});

function statsReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {

    case REQUEST_TODAY_GAMES:
      return state.merge(fromJS({
        games: []
      }));

    case RESOLVE_TODAY_GAMES:
      return state.merge(fromJS({
        games: action.payload
      }));

    case REJECT_TODAY_GAMES:
      return state.merge(fromJS({
        games: []
      }));

    default:
      return state;
  }
}

export default statsReducer;

/* Actions */

export function getTodaysGames() {
  return (dispatch) => {

    dispatch({
      types: [
        REQUEST_TODAY_GAMES,
        RESOLVE_TODAY_GAMES,
        REJECT_TODAY_GAMES
      ],
      payload: {
        promise: apiGetTodaysGames()
          .then((res) => {
            return res.games;
          })
      }
    });
  };
}
