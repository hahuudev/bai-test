import { Link, Navigate, Outlet } from "react-router-dom";
import logoImg from "~/assets/images/Group 69.png";
import styles from "./AdminLayout.module.scss";

const AdminLayout = () => {
    const token = localStorage.getItem("accessToken");
    if (!token) return <Navigate replace to="/login" />;
    return (
        <div className={styles.layout}>
            <aside className={styles.sidebar}>
                <Link to="/" className="mt-4 flex justify-center">
                    <img src={logoImg} alt="" />
                </Link>

                <div className={styles.nav}>
                    <Link to="/admin/profile">Post</Link>

                    <div>Logout</div>
                </div>
            </aside>
            <div></div>
            <Outlet />
        </div>
    );
};

export default AdminLayout;
