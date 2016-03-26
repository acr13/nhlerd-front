import { combineReducers } from 'redux';

import loading from './loading.js';
import stats from './stats.js';
import router from './router.js';

const rootReducer = combineReducers({
  loading,
  stats,
  router
});

export default rootReducer;
