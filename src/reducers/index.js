import { combineReducers } from 'redux';

import games from './games.js';
import loading from './loading.js';
import router from './router.js';
import stats from './stats.js';

const rootReducer = combineReducers({
  games,
  loading,
  router,
  stats
});

export default rootReducer;
