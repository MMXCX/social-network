const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';


let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych', avatarUrl: 'http://host1.loc/img/avatar.jpg'},
        {id: 2, name: 'Yuriy', avatarUrl: 'http://host1.loc/img/avatar.jpg'},
        {id: 3, name: 'Andrey', avatarUrl: 'http://host1.loc/img/avatar.jpg'},
        {id: 4, name: 'Maksim', avatarUrl: 'http://host1.loc/img/avatar.jpg'},
        {id: 5, name: 'Sveta', avatarUrl: 'http://host1.loc/img/avatar.jpg'},
        {id: 6, name: 'Olga', avatarUrl: 'http://host1.loc/img/avatar.jpg'}
    ],
    messages: [
        {id: 1, message: 'How are You', side: 'from'},
        {id: 2, message: 'New message', side: 'to'},
        {id: 3, message: 'Something else', side: 'from'},
        {id: 4, message: 'And some))', side: 'to'},
        {id: 5, message: '4th message', side: 'to'},
        {id: 6, message: 'The last message in this array/', side: 'from'}
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
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
