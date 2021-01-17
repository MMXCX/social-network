import classes from './ProfileInfo.module.css';

function ProfileInfo() {
    return (
        <div>
            <div className={classes.profileImage}>
                <img
                    src="http://host1.loc/img/islands.jpg"
                    alt="image"/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;
