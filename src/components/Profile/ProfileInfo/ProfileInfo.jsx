import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

function ProfileInfo(props) {
    if (!props.profile) {
        return (
            <Preloader/>
        );
    }
    return (
        <div>
            <div className={classes.profileImage}>
                <img
                    src="http://host1.loc/img/islands.jpg"
                    alt="background"/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile ? props.profile.photos.large : "http://host2.loc/img/user.webp"} alt="profilePhoto"/>
            </div>
            <div className={classes.fullName}>{props.profile.fullName}</div>
            <div>
                <p><b>Обо мне: </b>{props.profile.aboutMe}</p>
            </div>
            <p><b>Контакты:</b></p>
            <div className={classes.contacts}>
                {props.profile.contacts.facebook ? <p><b>Facebook: </b><a href={props.profile.contacts.facebook}>{props.profile.contacts.facebook}</a></p> : ''}
                {props.profile.contacts.website ? <p><b>Веб-сайт: </b><a href={props.profile.contacts.website}>{props.profile.contacts.website}</a></p> : ''}
                {props.profile.contacts.vk ? <p><b>В Контакте: </b><a href={props.profile.contacts.vk}>{props.profile.contacts.vk}</a></p> : ''}
                {props.profile.contacts.twitter ? <p><b>Твиттер: </b><a href={props.profile.contacts.twitter}>{props.profile.contacts.twitter}</a></p> : ''}
                {props.profile.contacts.instagram ? <p><b>Инстаграмм: </b><a href={props.profile.contacts.instagram}>{props.profile.contacts.instagram}</a></p> : ''}
                {props.profile.contacts.youtube ? <p><b>YouTube: </b><a href={props.profile.contacts.youtube}>{props.profile.contacts.youtube}</a></p> : ''}
                {props.profile.contacts.github ? <p><b>GitHub: </b><a href={props.profile.contacts.github}>{props.profile.contacts.github}</a></p> : ''}
                {props.profile.contacts.mainLink ? <p><b>MainLink.com: </b><a href={props.profile.contacts.mainLink}>{props.profile.contacts.mainLink}</a></p> : ''}
            </div>
            <p><b>Я {props.profile.lookingForAJob ? "" : "не "}ищу работу!</b></p>
        </div>
    );
}

export default ProfileInfo;
