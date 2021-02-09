import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import SendMessageBlockContainer from './SendMessageBlock/SendMessageBlockContainer';
import StoreContext from '../../StoreContext';

function Dialogs() {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage;

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
                                <SendMessageBlockContainer/>
                            </div>
                        </div>
                    );
                }
            }
        </StoreContext.Consumer>
    );
}

export default Dialogs;
