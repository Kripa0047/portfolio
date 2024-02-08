import React from "react";
import styles from "./code_view.module.css";

const Line = ({ children, lineNo }) => {
    return (
        <div className={styles.line}>
            <span className={styles.lineNo}>{lineNo < 10 ? `0${lineNo}` : lineNo}</span> {children}
        </div>
    );
}

export default Line;