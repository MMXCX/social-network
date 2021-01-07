import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

function Profile() {
    return (
        <div>
            <div>
                <img
                    src="http://host1.loc/img/islands.jpg"
                    alt="image"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;
