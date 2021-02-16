import classes from './UserBlock.module.css';
import {Button} from 'antd';

const UserBlock = (props) => {
    let user = props.user;
    return (
        <div className={classes.userBlock}>
            <span>
                <img className={classes.avatar} src={
                    user.photos.small != null ? user.photos.small : "http://host2.loc/img/user.webp"
                } alt="avatar"/>
                <Button onClick={() => user.followed ? props.unFollow(user.id) : props.follow(user.id)} type="primary">
                    {user.followed ? 'Unfollow' : 'Follow'}
                </Button>
            </span>
            <span>
                <p>Id - {user.id}</p>
                <p>Name - {user.name}</p>
                <p>Status - {user.status}</p>
                <p>Followed - {user.followed.toString()}</p>
            </span>

        </div>
    );
}

export default UserBlock;
