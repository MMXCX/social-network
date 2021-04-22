import classes from "./UserBlock.module.css";
import {Button} from "antd";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../../api/api";

const UserBlock = (props) => {
    let user = props.user;
    return (
        <div className={classes.userBlock}>
      <span>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
                className={classes.avatar}
                src={
                    user.photos.small != null
                        ? user.photos.small
                        : "http://host2.loc/img/user.webp"
                }
                alt="avatar"
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
              <Button
                  disabled={props.followingInProgress.some(id => id === user.id)}
                  onClick={() => {
                      props.toggleFollowingProgress(true, user.id);
                      usersAPI.unfollowUser(user.id).then((data) => {
                          if (data.resultCode === 0) {
                              props.unFollow(user.id);
                          }
                          props.toggleFollowingProgress(false, user.id);
                      });
                  }}
              >
                  Unfollow
              </Button>
          ) : (
              <Button
                  disabled={props.followingInProgress.some(id => id === user.id)}
                  onClick={() => {
                      props.toggleFollowingProgress(true, user.id);
                      usersAPI.followUser(user.id).then((data) => {
                          if (data.resultCode === 0) {
                              props.follow(user.id);
                          }
                          props.toggleFollowingProgress(false, user.id);
                      });
                  }}
              >
                  Follow
              </Button>
          )}
        </div>
      </span>
            <span>
        <p>Id - {user.id}</p>
        <p>Name - {user.name}</p>
        <p>Status - {user.status}</p>
        <p>Followed - {user.followed.toString()}</p>
      </span>
        </div>
    );
};

export default UserBlock;
