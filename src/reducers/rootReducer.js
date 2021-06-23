import { combineReducers } from 'redux';
import userReducer from './userReducer';
import otherUsersReducer from './otherUsersReducer';

const rootReducer = combineReducers({
        user: userReducer,
        otherUsers: otherUsersReducer
});

export default rootReducer;