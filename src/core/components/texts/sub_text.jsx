import React from "react";
import styles from "./text.module.css";

const SubText = ({ children }) => {
    return <h3 className={styles.subText}>{children}</h3>
}

export default SubText;