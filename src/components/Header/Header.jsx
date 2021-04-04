import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

function Header(props) {
    return (
        <header className={classes.header}>
            <img src="http://host1.loc/img/logo.png" alt="logo"/>
            <div className={classes.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;
