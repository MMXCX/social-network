import React from 'react';
import classes from './Users.module.css';
import UserBlock from './UserBlock/UserBlock.jsx';

let Users = (props) => {
    let usersListEl = props.users.map(
        (el) => <UserBlock key={el.id}
                           user={el}
                           follow={props.follow}
                           unFollow={props.unFollow}
                           toggleFollowingProgress={props.toggleFollowingProgress}
                           followingInProgress={props.followingInProgress}
        />
    );

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) pages.push(i);

    return (
        <div>
            <div>
                {pages.map(p => {
                    return (
                        <span key={p}
                              className={props.currentPage === p ? classes.selectedPage : classes.unSelectedPage}
                              onClick={() => props.onPageChanged(p)}
                        >{p}</span>
                    );
                })}
            </div>
            {usersListEl}
        </div>
    );
}

export default Users;
