import Post from './Post/Post';
import classes from './MyPosts.module.css';
import {Button} from 'antd';

function MyPosts() {

    let postsData = [
        {id: 1, message: 'It\'s my first Post', likesCount: 5},
        {id: 2, message: 'Very Famoust Post!!!', likesCount: 9},
        {id: 3, message: 'Worstest post in the world(', likesCount: 55},
        {id: 4, message: 'It\'s my first Post', likesCount: 0}
    ];

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
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
                <Post message={postsData[2].message} likesCount={postsData[2].likesCount}/>
                <Post message={postsData[3].message} likesCount={postsData[3].likesCount}/>
            </div>
        </div>
    );
}

export default MyPosts;
