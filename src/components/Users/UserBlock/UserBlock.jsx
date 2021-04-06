import classes from "./UserBlock.module.css";
import { Button } from "antd";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../../api/api";

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
                  onClick={() => {
                      usersAPI.unfollowUser(user.id).then((data) => {
                          if (data.resultCode === 0) {
                              props.unFollow(user.id);
                          }
                      });
                  }}
              >
                  Unfollow
              </Button>
          ) : (
              <Button
                  onClick={() => {
                      usersAPI.followUser(user.id).then((data) => {
                          if (data.resultCode === 0) {
                              props.follow(user.id);
                          }
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
