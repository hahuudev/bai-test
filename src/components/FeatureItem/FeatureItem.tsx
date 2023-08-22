import hi from "~/assets/images/image3 1.png";
import styles from "./FeatureItem.module.scss";
import { Link } from "react-router-dom";
import iconImg from "~/assets/images/Group 56.png";

type FeatureItemProps = {
    id?: string | number;
    title: string;
    avatar: string;
    content: string;
};

const FeatureItem = ({ title, avatar, content }: FeatureItemProps) => {
    return (
        <section className={styles.wraper}>
            <div className=""></div>
            <div className={styles.container}>
                <div className={styles.background}>
                    <img src={avatar} alt="" />
                </div>

                <section className={styles.content}>
                    <div className={styles["content-wraper"]}>
                        <h3>{title}</h3>

                        <p>{content}</p>

                        <Link to="/" className="flex items-center">
                            Learn more
                            <img src={iconImg} className="ml-4" />
                        </Link>
                    </div>
                </section>
            </div>

            <div className={styles.avatar}>
                <img src={hi} alt="" />
            </div>
        </section>
    );
};

export default FeatureItem;
