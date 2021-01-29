import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.css';

function Profile(props) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts newPostText={props.profilePage.newPostText}
                     posts={props.profilePage.posts}
                     dispatch={props.dispatch}
            />
        </div>
    );
}

export default Profile;
