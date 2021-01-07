import classes from './Post.module.css';

function Post(props) {
    return (
        <div className={classes.item}>
            <img src="http://host1.loc/img/avatar.jpg" alt="avatar"/>
            {props.message}
            <div>
                <span>Like</span> {props.likesCount}
            </div>
        </div>
    );
}

export default Post;
