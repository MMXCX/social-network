import classes from './SendMessageBlock.module.css';
import {Button, Input} from 'antd';
import * as React from "react";

const {TextArea} = Input;

function SendMessageBlock(props) {

    let textareaElement = React.createRef();

    function addMessage() {
        props.dispatch({
            type: 'ADD-MESSAGE'
        });
    }

    function onMessageChange() {
        let message = textareaElement.current.value;
        props.dispatch({
            type: 'UPDATE-NEW-MESSAGE-TEXT',
            newMessage: message
        });
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
