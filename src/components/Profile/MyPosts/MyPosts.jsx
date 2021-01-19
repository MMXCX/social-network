import Post from './Post/Post';
import classes from './MyPosts.module.css';
import {Button} from 'antd';
import React from 'react';

function MyPosts(props) {

    let postsElements = props.posts.map(
        el => <Post message={el.message} likesCount={el.likesCount}/>
    );

    let newPostElement = React.createRef();

    function addPost() {
        let text = newPostElement.current.value;
        alert(text);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} name="" id="" cols="30" rows="4"></textarea>
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
