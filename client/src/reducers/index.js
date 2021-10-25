import { combineReducers } from 'redux';

import provinces from './provinces';
import lotteries from './lotteries';
import users from './users';

export default combineReducers({ provinces, lotteries, users });
