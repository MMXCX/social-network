import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'It\'s my first Post', likesCount: 5},
    {id: 2, message: 'Very Famoust Post!!!', likesCount: 9},
    {id: 3, message: 'Worstest post in the world(', likesCount: 55},
    {id: 4, message: 'It\'s my first Post', likesCount: 0}
];

let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Yuriy'},
    {id: 3, name: 'Andrey'},
    {id: 4, name: 'Maksim'},
    {id: 5, name: 'Sveta'},
    {id: 6, name: 'Olga'}
];

let messages = [
    {id: 1, message: 'How are You'},
    {id: 2, message: 'New message'},
    {id: 3, message: 'Something else'},
    {id: 4, message: 'And some))'},
    {id: 5, message: '4th message'},
    {id: 6, message: 'The last message in this array/'},
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
