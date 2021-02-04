const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    posts: [
        {id: 1, message: 'It\'s my first Post', likesCount: 5},
        {id: 2, message: 'Very Famoust Post!!!', likesCount: 9},
        {id: 3, message: 'Worstest post in the world(', likesCount: 55},
        {id: 4, message: 'It\'s my first Post', likesCount: 0}
    ],
    newPostText: 'it-kamasutra.com'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';

            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;

            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => (
    {
        type: ADD_POST
    }
)

export const updateNewPostTextActionCreator = (text) => (
    {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
)

export default profileReducer;
