let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'It\'s my first Post', likesCount: 5},
                {id: 2, message: 'Very Famoust Post!!!', likesCount: 9},
                {id: 3, message: 'Worstest post in the world(', likesCount: 55},
                {id: 4, message: 'It\'s my first Post', likesCount: 0}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
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
            newMessageText: 'Write something here....'
        }
    },
    _callSubscriber() {
        console.log("State is Changed")
    },

    getState() {
        return this._state;
    },
    subscribe(observe) {
        console.log(observe);
        this._callSubscriber = observe;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 7,
                message: this._state.dialogsPage.newMessageText,
                side: 'to'
            }

            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);

        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        }
    }
}


export default store;
