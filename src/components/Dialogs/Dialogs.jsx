import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import SendMessageBlockContainer from './SendMessageBlock/SendMessageBlockContainer';

function Dialogs(props) {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(
        d => <DialogItem name={d.name} id={d.id} avatarUrl={d.avatarUrl}/>
    );
    let messagesElements = state.messages.map(
        m => <Message message={m.message} side={m.side}/>
    );


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>
                    {messagesElements}
                </div>
                <SendMessageBlockContainer
                    store={props.store}
                />
            </div>
        </div>
    );
}

export default Dialogs;
