import FeatureItem from "~/components/FeatureItem/FeatureItem";
import styles from "./Home.module.scss";
import Slider from "./Slider";
import img1 from "~/assets/images/Rectangle 39 (1).png";
import img2 from "~/assets/images/Rectangle 39.png";
import img3 from "~/assets/images/Rectangle 39 (2).png";
import img4 from "~/assets/images/Rectangle 39 (3).png";
import { useGetGalleriesQuery } from "~/redux/slider.service";
import { Link } from "react-router-dom";

const features = [
    {
        id: 1,
        title: "Search data",
        content:
            "Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.",
        avatar: img1,
    },
    {
        id: 2,
        title: "24 Hours Access",
        content: "Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent.",
        avatar: img2,
    },
    {
        id: 3,
        title: "Print Out",
        content: "Print out service gives you convenience if someday you need print data, just edit it all and just print it.",
        avatar: img3,
    },
    {
        id: 4,
        title: "Security Code",
        content:
            "Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.",
        avatar: img4,
    },
];

const Home = () => {
    const { data } = useGetGalleriesQuery();

    return (
        <section className={styles.home}>
            <section className={styles.top}>
                <h2>Features</h2>
                <div className={styles.sumary}>
                    <p>Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.</p>
                </div>
            </section>

            {/*  */}

            <section className={styles.features}>
                {features.map((feature) => (
                    <FeatureItem key={feature.id} {...feature} />
                ))}
            </section>

            <section className={styles.slider}>
                <h4>Testimonials</h4>
                <Slider>
                    {data?.map((item: any) => (
                        <div className={styles["slider-item"]} key={item.id}>
                            <div className={styles.image}>
                                <img src={item.imageUrl} alt="" className="" />
                            </div>

                            <div className={styles["slider-detail"]}>
                                <div className={styles.author}>
                                    <Link to="/">John Fang </Link>
                                    <Link to="/">wordfaang.com</Link>
                                </div>

                                <p>{item.desctiption}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>
        </section>
    );
};

export default Home;
