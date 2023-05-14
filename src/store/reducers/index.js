// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import logs from './logs';
import news from './newspaper';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, logs, news });

export default reducers;
