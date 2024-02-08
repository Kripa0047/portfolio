import React from "react";
import styles from "./text.module.css";

const BGText = ({ text }) => {
    return <h1 className={styles.bgText}>{text}</h1>;
}

export default BGText;