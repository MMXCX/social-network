import classes from './Dialogs.module.css';

function Dialogs() {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>
                    Dimych
                </div>
                <div className={classes.dialog + " " + classes.active}>
                    Yuriy
                </div>
                <div className={classes.dialog}>
                    Maksim
                </div>
                <div className={classes.dialog}>
                    Sveta
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>
                    How are You
                </div>
                <div className={classes.message}>
                    New message
                </div>
                <div className={classes.message}>
                    Somthing else
                </div>
                <div className={classes.message}>
                    And some))
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
