import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Button, Input} from "antd";
import * as React from "react";

const {TextArea} = Input;

function Dialogs(props) {
    let state = props.state;

    let dialogsElements = state.dialogs.map(
        d => <DialogItem name={d.name} id={d.id} avatarUrl={d.avatarUrl}/>
    );

    let messagesElements = state.messages.map(
        m => <Message message={m.message} side={m.side}/>
    );

    function onSendMessageClick() {
        props.onSendMessageClick();
    }

    function onNewMessageChange(e) {
        let message = e.target.value;
        props.onNewMessageChange(message);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <div>
                        <TextArea onChange={onNewMessageChange} className={classes.inputMessage}
                                  rows="5" value={state.newMessageBody} placeholder={"Enter you messages.."}/>
                    </div>
                    <div>
                        <Button onClick={onSendMessageClick} type="danger">Send-></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
