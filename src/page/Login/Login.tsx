import { Link, Navigate, useNavigate } from "react-router-dom";
import logoImg from "~/assets/images/Group 69.png";
import styles from "./Login.module.scss";
import { useState } from "react";
import request from "~/configs/request";
import { toast } from "react-toastify";

const Login = () => {
    const [value, setValue] = useState<string>("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (value.length === 0) {
            alert("Vui long nhap");
        } else {
            try {
                const res = await request.post("/auth/login", { username: value });
                localStorage.setItem("accessToken", res.data.accessToken);
                toast.success("Đăng nhập thành công");
                navigate("/");
            } catch (error) {
                console.log(error);
            }
        }
    };

    const token = localStorage.getItem("accessToken");
    if (token) return <Navigate replace to="/" />;
    return (
        <div>
            <Link to="/">
                <img src={logoImg} alt="" className="mt-7" />
            </Link>

            <div className={styles.wraper}>
                <h1>Sign In</h1>

                <div className={styles.form}>
                    <label htmlFor="">Username</label>
                    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                </div>

                <button className={styles.btn} type="submit" onClick={handleSubmit}>
                    Sign up
                </button>
            </div>
        </div>
    );
};

export default Login;
