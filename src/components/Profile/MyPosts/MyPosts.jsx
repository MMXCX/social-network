import Post from './Post/Post';
import classes from './MyPosts.module.css';
import {Button, Input} from 'antd';
import React from 'react';

const {TextArea} = Input;

function MyPosts(props) {

    let postsElements = props.posts.map(
        el => <Post message={el.message} likesCount={el.likesCount}/>
    );

    let newPostElement = React.createRef();

    function addPost() {
        props.dispatch({type: 'ADD-POST'});
    }

    function onPostChange() {
        let text = newPostElement.current.value;
        props.dispatch({
            type: 'UPDATE-NEW-POST-TEXT',
            newText: text
        });
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} rows={4} ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <Button onClick={addPost} type="primary">Add Post</Button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
