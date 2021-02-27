import {connect} from 'react-redux';
import {followAC, unFollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC} from '../../redux/usersReducer';
import React from "react";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
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

    // eslint-disable-next-line no-undef
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
        return (
            <Users onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   users={this.props.users}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
            />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalUsersCount: (totalUsers) => {
            dispatch(setTotalUsersCountAC(totalUsers));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

