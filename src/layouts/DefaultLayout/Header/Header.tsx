import { Link, useNavigate } from "react-router-dom";
import logoImg from "~/assets/images/Group 69.png";
import bannerImg from "~/assets/images/image1 1.png";
import styles from "./Header.module.scss";
import { toast } from "react-toastify";
import request from "~/configs/request";

const Header = () => {
    const token = localStorage.getItem("accessToken");

    const navigate = useNavigate();
    const handleLogout = async () => {
        localStorage.removeItem("accessToken");
        try {
            await request.delete("/auth/logout");
        } catch (error) {
            console.log(error);
        } finally {
            toast.success("Logout thành công");
            navigate("/login");
        }
    };
    return (
        <header className={styles.header}>
            <div className="flex items-center justify-between">
                <Link to="/">
                    <img src={logoImg} alt="" width="49px" />
                </Link>

                <div className="">
                    {token ? (
                        <>
                            <Link to="/admin/profile" className={styles.button}>
                                <button>Profile</button>
                            </Link>
                            <a className={styles.button}>
                                <button onClick={handleLogout}>Logout</button>
                            </a>
                        </>
                    ) : (
                        <Link to="/login" className={styles.button}>
                            <button>Signin</button>
                        </Link>
                    )}
                </div>
            </div>

            <section className={styles.info}>
                <section className={styles["info-left"]}>
                    <h1>Save your data storage here.</h1>

                    <p>
                        Data Warehouse is a data storage area that has been tested for security, so you can store your data here safely but not be
                        afraid of being stolen by others.
                    </p>

                    <Link to="/">
                        <button>Learn more</button>
                    </Link>
                </section>

                <div className={styles["info-right"]}>
                    <img src={bannerImg} alt="" />
                </div>
            </section>
        </header>
    );
};

export default Header;
