import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from "./home.module.scss";

function HomePage() {
    return (
        <div className={style.wrapper}>
            <Header />
            <div className={style.main}>
                <div className={style.info}>
                    <h1>HOUSE OF GAMBLING </h1>
                    <p>Raise your ROI with direct advertiser</p>
                    <button>Become a Partner</button>
                </div>
                <div className={style.img}></div>
                <div className={style.blog}></div>
            </div>
            <Footer/>
        </div>
    )
}

export default HomePage;