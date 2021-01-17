import classes from './Message.module.css';

function Message(props) {
    let sideClassName;
    if (props.side === 'from') {
        sideClassName = classes.from;
    } else {
        sideClassName = classes.to;
    }

    return (
        <div className={sideClassName}>
            <div className={classes.message}>
                {props.side}{props.message}
            </div>
        </div>
    );
}

export default Message;
