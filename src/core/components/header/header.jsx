import { useState, useEffect, useContext } from "react";
import styles from "./header.module.css";
import { ToggleTheme } from "../";
import { GlobalStateContext } from "../../store/global_state";

const Header = () => {
    const globalState = useContext(GlobalStateContext);
    const [headerStyleClass, setHeaderStyleClass] = useState("top");

    useEffect(() => {
        var lastVal = 0;
        window.onscroll = function () {
            let y = window.scrollY;
            if (y > lastVal) {
                setHeaderStyleClass(styles.down);
            }
            if (y < lastVal) {
                setHeaderStyleClass(styles.up);
            }
            if (y === 0) {
                setHeaderStyleClass(styles.top);
            }
            lastVal = y;
        };
    }, []);

    return (
        <div className={styles.container}>
            <div className={[styles.header, headerStyleClass].join(" ")}>
                <div className={styles.name} style={{ color: globalState.isThemeDark ? "#fff" : "#000" }}>
                    <span className={styles.code}>{"<"}</span>
                    KRIPA
                    <span className={styles.code}>{"/>"}</span>
                </div>
                <ul className={styles.nav}>
                    <li className={styles.item}><a href="#start">{"<Start/>"}</a></li>
                    <li className={styles.item}><a href="#work">{"<Work/>"}</a></li>
                    <li className={styles.item}><a href="#about">{"<About/>"}</a></li>
                    <li className={styles.item}><a href="#contacts">{"<Contacts/>"}</a></li>
                    <li><ToggleTheme /></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;