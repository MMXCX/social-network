import React from 'react';
import classes from './Users.module.css';
import UserBlock from './UserBlock/UserBlock.jsx';
import * as axios from 'axios';

class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users", {
            params: {
                count: this.props.pageSize,
                page: this.props.currentPage
            }
        }).then(
            response => {
                console.log(response);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            }
        );
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get("https://social-network.samuraijs.com/api/1.0/users", {
            params: {
                count: this.props.pageSize,
                page: pageNumber
            }
        }).then(
            response => {
                this.props.setUsers(response.data.items);
            }
        );
    }

    render() {
        let UsersListEl = this.props.users.map(
            (el) => <UserBlock key={el.id} user={el} follow={this.props.follow} unFollow={this.props.unFollow}/>
        );

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return (
                            <span key={p}
                                  className={this.props.currentPage === p ? classes.selectedPage : classes.unSelectedPage}
                                  onClick={() => this.onPageChanged(p)}
                            >{p}</span>
                        );
                    })}
                </div>
                {UsersListEl}
            </div>
        );
    }

}

export default Users;
