import { combineReducers } from 'redux';

//importing my reducers
import messages from './messages';
import users from './users';

const chat = combineReducers({
    messages,
    users,
});

export default chat;