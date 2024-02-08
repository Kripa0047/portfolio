import React from "react";
import styles from "./text_slider.module.css";

const TextSlider = ({ children, delayDuration, curtainColor, style }) => {
    return (
        <div>
            <div className={styles.container} style={style}>
                <div className={styles.curtain} style={{ animationDelay: `${delayDuration || 0}s`, backgroundColor: curtainColor }}></div>
                <div className={styles.content} style={{ animationDelay: `${delayDuration || 0}s`, }}>{children}</div>
            </div>
        </div>
    );
}

export default TextSlider;