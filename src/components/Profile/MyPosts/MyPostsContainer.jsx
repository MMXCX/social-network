import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import StoreContext from "../../../StoreContext";


function MyPostsContainer(props) {

    return (
        <StoreContext>
            {
                (store) => {
                    let state = store.getState();

                    function addPost() {
                        store.dispatch(addPostActionCreator());
                    }

                    function onPostChange(text) {
                        let action = updateNewPostTextActionCreator(text);
                        store.dispatch(action);
                    }

                    return <MyPosts updateNewPostText={onPostChange}
                                    addPost={addPost}
                                    posts={state.profilePage.posts}
                                    newPostText={state.profilePage.newPostText}
                    />
                }
            }
        </StoreContext>
    );
}

export default MyPostsContainer;
