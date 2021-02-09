import SendMessageBlock from './SendMessageBlock';
import * as React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../../redux/dialogsReducer';
import StoreContext from '../../../StoreContext';


function SendMessageBlockContainer(props) {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    function onSendMessageClick() {
                        store.dispatch(sendMessageCreator());
                    }

                    function onNewMessageChange(e) {
                        let message = e.target.value;
                        store.dispatch(updateNewMessageBodyCreator(message));
                    }

                    return <SendMessageBlock onSendMessageClick={onSendMessageClick}
                                             onNewMessageChange={onNewMessageChange}
                                             messageText={state.dialogsPage.newMessageBody}
                    />
                }
            }
        </StoreContext.Consumer>


    );
}

export default SendMessageBlockContainer;
