import classes from './Post.module.css';

function Post(props) {
    return (
        <div className={classes.item}>
            <img src="http://host1.loc/img/avatar.jpg" alt="avatar"/>
            {props.message}
            <div>
                <span>Like {props.likes}</span>
            </div>
        </div>
    );
}

export default Post;
