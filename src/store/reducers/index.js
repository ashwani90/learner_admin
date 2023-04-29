// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import logs from './logs';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, logs });

export default reducers;
