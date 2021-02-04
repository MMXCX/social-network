const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 7,
                message: state.newMessageBody,
                side: 'to'
            }
            state.messages.push(newMessage);
            state.newMessageBody = '';

            return state;

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;

            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => (
    {
        type: SEND_MESSAGE
    }
)

export const updateNewMessageBodyCreator = (message) => (
    {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: message
    }
)

export default dialogsReducer;
