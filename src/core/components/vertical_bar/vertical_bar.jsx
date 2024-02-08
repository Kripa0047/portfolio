import React from "react";
import styles from "./vertical_bar.module.css";

const VerticalBar = ({ height, top, circleTop }) => {
    return (
        <div className={styles.sideBar} style={{ height, top }}>
            <div className={styles.circle} style={{ top: circleTop }}></div>
        </div >
    );
}

export default VerticalBar;