import classes from './UserBlock.module.css';
import {Button} from 'antd';
import {NavLink} from "react-router-dom";
import axios from "axios";

const UserBlock = (props) => {
    let user = props.user;
    return (
        <div className={classes.userBlock}>
            <span>
                <div>
                    <NavLink to={"/profile/" + user.id}>
                        <img className={classes.avatar} src={
                            user.photos.small != null ? user.photos.small : "http://host2.loc/img/user.webp"
                        } alt="avatar"/>
                    </NavLink>
                </div>
                <div>
                    {
                        user.followed
                            ? <Button onClick={
                                () => {
                                    axios.delete(
                                        "https://social-network.samuraijs.com/api/1.0/follow/" + user.id,
                                        {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "b6c82bd2-36fc-4b01-9748-1d819f1daa47"
                                            }
                                        }
                                    ).then(
                                        response => {
                                            if (response.data.resultCode === 0) {
                                                props.unFollow(user.id);
                                            }
                                        }
                                    );
                                }
                            }>Unfollow</Button>
                            : <Button onClick={
                                () => {
                                    axios.post(
                                        "https://social-network.samuraijs.com/api/1.0/follow/" + user.id,
                                        {},
                                        {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "b6c82bd2-36fc-4b01-9748-1d819f1daa47"
                                            }
                                        }
                                    ).then(
                                        response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(user.id);
                                            }
                                        }
                                    );
                                }
                            }>Follow</Button>
                    }
                </div>
                {/*<Button onClick={*/}
                {/*    () => user.followed*/}
                {/*        ? (*/}
                {/*            axios.post(*/}
                {/*                "https://social-network.samuraijs.com/api/1.0/follow" + user.id,*/}
                {/*                {credentials: true}*/}
                {/*            ).then()*/}
                {/*        props.unFollow(user.id)*/}
                {/*    )*/}
                {/*    : (*/}
                {/*    props.follow(user.id)*/}
                {/*    )*/}
                {/*} type="primary">*/}

                {/*    {user.followed ? 'Unfollow' : 'Follow'}*/}
                {/*</Button>*/}
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
