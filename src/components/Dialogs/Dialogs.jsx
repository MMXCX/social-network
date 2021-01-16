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

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Yuriy'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'Maksim'},
        {id: 5, name: 'Sveta'},
        {id: 6, name: 'Olga'}
    ];

    let messagesData = [
        {id: 1, message: 'How are You'},
        {id: 2, message: 'New message'},
        {id: 3, message: 'Something else'},
        {id: 4, message: 'And some))'},
        {id: 5, message: '4th message'},
        {id: 6, message: 'The last message in this array/'},
    ];


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>
                <Message message={messagesData[5].message}/>
            </div>
        </div>
    );
}

export default Dialogs;
