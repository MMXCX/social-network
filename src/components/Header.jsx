import classes from './Header.module.css';

function Header() {
    return (
        <header className={classes.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/600px-Telegram_logo.svg.png"
                alt="logo"/>
        </header>
    );
}

export default Header;
