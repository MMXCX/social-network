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

    let dialogsElements = dialogs.map(
        d => <DialogItem name={d.name} id={d.id}/>
    );
    let messagesElements = messages.map(
        m => <Message message={m.message}/>
    );



    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;
