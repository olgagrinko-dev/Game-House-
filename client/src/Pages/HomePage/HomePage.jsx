import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from "./home.module.scss";

function HomePage() {
    return (
        <div className={style.wrapperimg}>

            <Header />
            <div className={style.main}>
                <div className={style.info}>
                    <h1>HOUSE OF GAMBLING </h1>
                    <p>Raise your ROI with direct advertiser</p>
                    <button>Become a Partner</button>
                </div>
                <div className={style.mainimg}></div>
                <div className={style.blog}>
                    <h2>BLOG</h2>
                    <div className={style.payment}>
                        <p>Payment methods: Skrill,
                            Neteller, webmoney, Bank
                            transfer
                            10.02.2023
                        </p>
                        <p>Payment methods: Skrill,
                            Neteller, webmoney, Bank
                            transfer
                            10.02.2023
                        </p>
                        <p>Payment methods: Skrill,
                            Neteller, webmoney, Bank
                            transfer
                            10.02.2023
                        </p>
                        <p>Payment methods: Skrill,
                            Neteller, webmoney, Bank
                            transfer
                            10.02.2023
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;