import style from './footer.module.scss';

function Footer() {

    return (
        <div className={style.footer}>
            <div className={style.link}>
                <p>Terms & Conditions</p>
                <p>Cookies</p>
                <p>Contacts</p>
                <p>Careers</p>
                <p>Brand Guide</p>                
            </div>

            <div className={style.imgLink}></div>
        </div>
    )
}

export default Footer;