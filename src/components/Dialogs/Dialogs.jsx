import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

function Dialogs() {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/1" activeClassName={classes.active}>Dimych</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/2" activeClassName={classes.active}>Yuriy</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/3" activeClassName={classes.active}>Maksim</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/4" activeClassName={classes.active}>Sveta</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>
                    How are You
                </div>
                <div className={classes.message}>
                    New message
                </div>
                <div className={classes.message}>
                    Somthing else
                </div>
                <div className={classes.message}>
                    And some))
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
