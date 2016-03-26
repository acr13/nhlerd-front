import { fromJS } from 'immutable';

/* Constants */
const REQUEST_PLAYER_STATS = 'REQUEST_PLAYER_STATS';
const RESOLVE_REQUEST_PLAYER_STATS = 'RESOLVE_REQUEST_PLAYER_STATS';
const REJECT_REQUEST_PLAYER_STATS = 'REJECT_REQUEST_PLAYER_STATS';

/* Reducer */

const INITIAL_STATE = fromJS({
  loading: false
});

function loadingReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {

    case REQUEST_PLAYER_STATS:
      return state.merge(fromJS({
        loading: true
      }));

    case RESOLVE_REQUEST_PLAYER_STATS:
      return state.merge(fromJS({
        loading: false
      }));

    case REJECT_REQUEST_PLAYER_STATS:
      return state.merge(fromJS({
        loading: false
      }));

    default:
      return state;
  }
}

export default loadingReducer;

/* Actions */
