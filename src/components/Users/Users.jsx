import classes from './Users.module.css';
import UserBlock from './UserBlock/UserBlock.jsx';

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                avatarUrl: 'http://host2.loc/img/face-2.jpeg',
                followed: true,
                fullName: 'Sergey P',
                status: 'Junior',
                location: {country: 'Belarus', city: 'Vitebsk'}
            },
            {
                id: 2,
                avatarUrl: 'http://host2.loc/img/face-1.jpg',
                followed: true,
                fullName: 'Olga S',
                status: 'Team lead',
                location: {country: 'Belarus', city: 'Minsk'}
            },
            {
                id: 3,
                avatarUrl: 'http://host2.loc/img/face-3.jpg',
                followed: false,
                fullName: 'Mark P',
                status: 'Boss of company',
                location: {country: 'Belarus', city: 'Grodno'}
            },
            {
                id: 4,
                avatarUrl: 'http://host2.loc/img/face-4.png',
                followed: false,
                fullName: 'Martin V',
                status: 'Commercial editor',
                location: {country: 'Russia', city: 'Moscow'}
            }
        ]);
    }


    console.log(props)
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
