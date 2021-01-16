import Post from './Post/Post';
import classes from './MyPosts.module.css';
import {Button} from 'antd';

function MyPosts() {

    let posts = [
        {id: 1, message: 'It\'s my first Post', likesCount: 5},
        {id: 2, message: 'Very Famoust Post!!!', likesCount: 9},
        {id: 3, message: 'Worstest post in the world(', likesCount: 55},
        {id: 4, message: 'It\'s my first Post', likesCount: 0}
    ];

    let postsElements = posts.map(
        el => <Post message={el.message} likesCount={el.likesCount}/>
    );

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
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
