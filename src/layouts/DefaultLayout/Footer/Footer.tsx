import styles from "./Footer.module.scss";
import logoImg from "~/assets/images/Group 69.png";
import messImg from "~/assets/images/Group 64.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <hr />

            <div className={styles.wraper}>
                <div className={styles.item}>
                    <h5 className="flex items-center" style={{ fontSize: "20px" }}>
                        <img src={logoImg} alt="" className="mr-4" />
                        DataWarehouse
                    </h5>

                    <div className="my-6">
                        <p>Warehouse Society, 234</p>
                        <p> Bahagia Ave Street PRBW 29281</p>
                    </div>

                    <p>info@warehouse.project 1-232-3434 (Main)</p>
                </div>
                <div className={styles.item}>
                    <h5>About</h5>

                    <div className="mt-7">
                        <Link to="/">Linkrofile</Link>
                        <Link to="/">Feature</Link>
                        <Link to="/">Carees</Link>
                        <Link to="/">DW news</Link>
                    </div>
                </div>
                <div className={styles.item}>
                    <h5>Help</h5>

                    <div className="mt-7">
                        <Link to="/">Support</Link>
                        <Link to="/">Sign up</Link>
                        <Link to="/">Guied</Link>
                        <Link to="/">Reports</Link>
                        <Link to="/">Q & A</Link>
                    </div>
                </div>
                <div className={styles.item}>
                    <h5>Social Media</h5>

                    <div className="mt-7">
                        <span></span>
                        <span className="mx-4"></span>
                        <span></span>
                    </div>
                </div>
            </div>

            <div className={styles["footer-bottom"]}>
                <span>© Datawarehouse™, 2020. All rights reserved. Company Registration Number: 21479524.</span>

                <img src={messImg} alt="" />
            </div>
        </footer>
    );
};

export default Footer;
