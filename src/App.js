import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

function App(props) {
    return (
        <Router>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route path={"/profile"}
                               render={() => <Profile profilePage={props.state.profilePage}
                                                      addPost={props.addPost}
                                                      updateNewPostText={props.updateNewPostText}/>}/>
                        <Route path={"/dialogs"} render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                        <Route path={"/news"} component={News}/>
                        <Route path={"/music"} component={Music}/>
                        <Route path={"/settings"} component={Settings}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
