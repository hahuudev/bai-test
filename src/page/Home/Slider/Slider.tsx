import { useState } from "react";
import prevIcon from "~/assets/images/Group 57.png";
import nextIcon from "~/assets/images/Group 58.png";
import styles from "./Slider.module.scss";
import clsx from "clsx";

type SilderProps = {
    children: any;
};
type SilderItemProps = {
    children: React.ReactNode;
    active: boolean;
};

const SliderItem = ({ children, active }: SilderItemProps) => {
    return <div className={clsx(styles["slider-item"], active && styles.active)}>{children}</div>;
};

const Slider = ({ children }: SilderProps) => {
    const [positionActive, setPositionActive] = useState<number>(0);

    if (!children) return null;

    const handlePrev = () => {
        if (positionActive == 0) {
            return setPositionActive(children.length - 1);
        }

        setPositionActive(positionActive - 1);
    };

    const handleNext = () => {
        if (positionActive == children.length - 1) {
            return setPositionActive(0);
        }
        setPositionActive(positionActive + 1);
    };

    return (
        <div className={styles.slider}>
            <button onClick={handlePrev} className={styles.btnPrev}>
                <img src={prevIcon} alt="" />
            </button>
            <section className={styles.container}>
                {children?.map((child: React.ReactNode, index: number) => (
                    <SliderItem key={index} active={positionActive === index}>
                        {child}
                    </SliderItem>
                ))}
            </section>

            <button onClick={handleNext} className={styles.btnNext}>
                <img src={nextIcon} alt="" />
            </button>

            <div className={styles.dots}>
                {children?.map((_child: React.ReactNode, index: number) => (
                    <span key={index} className={clsx(positionActive === index && styles.active)} onClick={() => setPositionActive(index)}></span>
                ))}
            </div>
        </div>
    );
};

export default Slider;
