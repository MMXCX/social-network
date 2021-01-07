import classes from './Header.module.css';

function Header() {
    return (
        <header className={classes.header}>
            <img
                src="http://host1.loc/img/logo.png"
                alt="logo"/>
        </header>
    );
}

export default Header;
