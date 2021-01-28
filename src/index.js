import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import state, {addMessage, addPost, subscribe, updateNewMessageText, updateNewPostText} from "./redux/state";
import store from './redux/state';
import ReactDOM from "react-dom";
import App from "./App";


function rerenderEntireTree(state) {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={store.addPost} updateNewPostText={store.updateNewPostText}
                 addMessage={store.addMessage} updateNewMessageText={store.updateNewMessageText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}




rerenderEntireTree(store.state);
console.log(store);

store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
