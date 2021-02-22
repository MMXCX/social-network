import React from 'react';
import classes from './Users.module.css';
import UserBlock from './UserBlock/UserBlock.jsx';
import * as axios from 'axios';

class Users extends React.Component {
    constructor(props) {
        super(props);

        axios.get("https://social-network.samuraijs.com/api/1.0/users", {
            params: {
                count: 10,
                term: "Mark"
            }
        }).then(
            response => {
                console.log(response);
                this.props.setUsers(response.data.items)
            }
        );
    }

    render() {
        let UsersListEl = this.props.users.map(
            (el) => <UserBlock key={el.id} user={el} follow={this.props.follow} unFollow={this.props.unFollow}/>
        );

        return (
            <div>
                {UsersListEl}
            </div>
        );
    }

}

export default Users;
