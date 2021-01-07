import classes from './Post.module.css';

function Post() {
    return (
        <div className={classes.item}>
            <img src="http://host1.loc/img/avatar.jpg" alt="avatar"/>
            post1
            <div>
                <span>Like</span>
            </div>
        </div>
    );
}

export default Post;
