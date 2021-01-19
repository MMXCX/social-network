import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import SendMessageBlock from './SendMessageBlock/SendMessageBlock';

function Dialogs(props) {

    let dialogsElements = props.state.dialogs.map(
        d => <DialogItem name={d.name} id={d.id} avatarUrl={d.avatarUrl}/>
    );
    let messagesElements = props.state.messages.map(
        m => <Message message={m.message} side={m.side}/>
    );



    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <SendMessageBlock/>
            </div>
        </div>
    );
}

export default Dialogs;
