import classes from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

function DialogItem(props) {
    let path = "/dialogs/" + props.id;

    return (
        <div className={classes.dialogItem}>
            <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;
