import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from './redux/state';

export function rerenderEntireTree(state) {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost} updateNewPostText={updateNewPostText}
                 addMessage={addMessage} updateNewMessageText={updateNewMessageText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
