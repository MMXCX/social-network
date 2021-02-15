import {combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from './usersReducer';
import sidebarReducer from './sidebarReducer';


let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducers);
window.store = store;

export default store;
