import style from './header.module.sass';

function Header() {

    return (
        <div className={style.header}>
            <div className={style.nav}>
                <p>About us</p>
                <p>Brands</p>
                <p>Commissions</p>
                <p>News</p>
                <p>Contact us</p>
                <p>Careers</p>
            </div>

            <div className={style.btn}>
                <button className={style.lan}>EN</button>
                <button className={style.log}>LOG IN</button>
                <button className={style.sign}>SIGN UP</button>
            </div>
        </div>
    )
}

export default Header;