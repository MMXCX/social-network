import classes from './SendMessageBlock.module.css';
import {Button, Input} from 'antd';
import * as React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../../redux/dialogsReducer';

const {TextArea} = Input;

function SendMessageBlock(props) {



    function onNewMessageChange(message) {
        props.onNewMessageChange(message);
    }

    return (
        <div>
            <div>
                <TextArea onChange={onNewMessageChange} className={classes.inputMessage}
                          rows="5" value={props.messageText} placeholder={"Enter you messages.."}/>
            </div>
            <div>
                <Button onClick={props.onSendMessageClick} type="danger">Send-></Button>
            </div>
        </div>
    );
}

export default SendMessageBlock;
