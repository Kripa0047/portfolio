import React from "react";
import love from "../../../assets/icon/love.png";
import coffee from "../../../assets/icon/coffee.png";
import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer}>
            Made with &nbsp;<img src={love} alt="icon" /> &nbsp;and&nbsp; <img src={coffee} alt="icon" />
        </div>
    );
}

export default Footer;