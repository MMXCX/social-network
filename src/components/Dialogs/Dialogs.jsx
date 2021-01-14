import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

function DialogItem(props) {
    let path = "/dialogs/" + props.id;

    return (
        <div className={classes.dialog}>
            <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    );
}

function Message(props) {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    );
}

function Dialogs() {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Yurij" id="2"/>
                <DialogItem name="Maksim" id="3"/>
                <DialogItem name="Sveta" id="4"/>
            </div>
            <div className={classes.messages}>
                <Message message="How are You"/>
                <Message message="New message"/>
                <Message message="Somthing else"/>
                <Message message="And some))"/>
            </div>
        </div>
    );
}

export default Dialogs;
