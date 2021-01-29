import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import SendMessageBlock from './SendMessageBlock/SendMessageBlock';

function Dialogs(props) {

    let dialogsElements = props.dialogPage.dialogs.map(
        d => <DialogItem name={d.name} id={d.id} avatarUrl={d.avatarUrl}/>
    );
    let messagesElements = props.dialogPage.messages.map(
        m => <Message message={m.message} side={m.side}/>
    );


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <SendMessageBlock
                    dispatch={props.dispatch}
                    messageText={props.messageText}
                />
            </div>
        </div>
    );
}

export default Dialogs;
