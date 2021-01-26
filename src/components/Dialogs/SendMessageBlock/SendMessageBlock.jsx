import classes from './SendMessageBlock.module.css';
import {Button, Input} from 'antd';
import * as React from "react";

const {TextArea} = Input;

function SendMessageBlock(props) {

    let textareaElement = React.createRef();

    function addMessage() {
        props.addMessage();
    }

    function onMessageChange() {
        let message = textareaElement.current.value;
        props.updateNewMessageText(message);
    }

    return (
        <>
            <textarea onChange={onMessageChange} ref={textareaElement} name="" id="" cols="30"
                      rows="5" value={props.messageText}/>
            <Button onClick={addMessage} type="danger">Send-></Button>
        </>
    );
}

export default SendMessageBlock;
