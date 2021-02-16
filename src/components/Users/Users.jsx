import classes from './Users.module.css';
import UserBlock from './UserBlock/UserBlock.jsx';
import * as axios from 'axios';

const Users = (props) => {
    if (props.users.length == 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users", {
            params: {
                count: 10,
                term: "Mark"
            }
        }).then(
            response => {
                console.log(response);
                props.setUsers(response.data.items)
            }
        );
    }

    const UsersListEl = props.users.map(
        (el) => <UserBlock key={el.id} user={el} follow={props.follow} unFollow={props.unFollow}/>
    );
    return (
        <div>
            {UsersListEl}
        </div>
    );
}

export default Users;
