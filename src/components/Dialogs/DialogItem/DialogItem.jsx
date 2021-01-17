import classes from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

function DialogItem(props) {
    let path = "/dialogs/" + props.id;

    return (
        <NavLink to={path} activeClassName={classes.active}>
            <div className={classes.dialogItem}>
                <img src={props.avatarUrl} alt="avatar"/>
                {props.name}
            </div>
        </NavLink>
    );
}

export default DialogItem;
