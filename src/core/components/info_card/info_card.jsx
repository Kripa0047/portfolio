import React from "react";
import { Link } from "react-router-dom";
import styles from "./info_card.module.css";

const InfoCard = ({ image, link, details, title, contributions }) => {
    return (
        <div className={styles.card}>
            <h2>{title}</h2>
            <p>{details}</p>
            {contributions?.map((e) => <p className={styles.contribution}>{e}</p>)}
            <Link to={link}>
                <img src={image} alt={title} className={styles.image} />
            </Link>
        </div>
    );
}

export default InfoCard;