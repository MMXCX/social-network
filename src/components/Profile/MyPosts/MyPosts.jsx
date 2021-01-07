import Post from './Post/Post';
import classes from './MyPosts.module.css';

function MyPosts() {

    let obj = {
        message: "MESSAGE 1"
    }

    return (
        <div>
            My posts
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add Post</button>
            </div>
            <div className={classes.posts}>
                <Post message={obj.message} likes={5} />
                <Post message="It's my first Post" likes={9} />
            </div>
        </div>
    );
}

export default MyPosts;
