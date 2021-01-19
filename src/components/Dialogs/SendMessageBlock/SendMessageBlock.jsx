import classes from './SendMessageBlock.module.css';
import {Button} from 'antd';
import * as React from "react";

function SendMessageBlock() {

    let textareaElement = React.createRef();

    function onSendButtonClick() {
        let text = textareaElement.current.value;
        alert(text)
    }

    return (
        <>
            <textarea ref={textareaElement} name="" id="" cols="30" rows="5"></textarea>
            <Button onClick={onSendButtonClick} type="danger">Send-></Button>
        </>
    );
}

export default SendMessageBlock;
