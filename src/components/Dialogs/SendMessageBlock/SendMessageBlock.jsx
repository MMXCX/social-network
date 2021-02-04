import classes from './SendMessageBlock.module.css';
import {Button, Input} from 'antd';
import * as React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../../redux/dialogsReducer';

const {TextArea} = Input;

function SendMessageBlock(props) {


    function onSendMessageClick() {
        props.dispatch(sendMessageCreator());
    }

    function onNewMessageChange(e) {
        let message = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(message));
    }

    return (
        <div>
            <div>
                <TextArea onChange={onNewMessageChange} className={classes.inputMessage}
                          rows="5" value={props.messageText} placeholder={"Enter you messages.."}/>
            </div>
            <div>
                <Button onClick={onSendMessageClick} type="danger">Send-></Button>
            </div>
        </div>
    );
}

export default SendMessageBlock;
