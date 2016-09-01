import { combineReducers } from 'redux';

import user from './userReducer';
import tweets from './tweetsReducer';

export default combineReducers({
    tweets,
    user,
});
