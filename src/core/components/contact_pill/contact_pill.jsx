import React from "react";
import { Link } from "react-router-dom";
import styles from "./contact_pill.module.css";


const ContactPill = ({ icon, text, link }) => {
    return (
        <Link to={link} className={styles.pill}>
            <img src={icon} alt="icon" className={styles.icon} />
            <span>{text}</span>
        </Link>
    );
}

export default ContactPill;