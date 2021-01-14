import Post from './Post/Post';
import classes from './MyPosts.module.css';
import {Button} from 'antd';

function MyPosts() {

    let obj = {
        message: "MESSAGE 1"
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="4"></textarea>
                </div>
                <div>
                    <Button type="primary">Add Post</Button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message={obj.message} likesCount="5"/>
                <Post message="It's my first Post" likesCount="9"/>
            </div>
        </div>
    );
}

export default MyPosts;
