import React, { useContext } from "react";
import styles from "./contacts.module.css";
import { VerticalBar, SubText, ContactPill } from "../../../../core/components";
import linkedIn from "../../../../assets/icon/linkedin.png";
import github from "../../../../assets/icon/github.png";
import instagram from "../../../../assets/icon/instagram.png";
import mail from "../../../../assets/icon/mail.png";
import twitter from "../../../../assets/icon/twitter.png";
import { GlobalStateContext } from "../../../../core/store/global_state";


const Constants = () => {
    const globalState = useContext(GlobalStateContext);
    return (
        <div id="contacts" className={styles.container} style={{ backgroundColor: globalState.isThemeDark ? "#191527" : "#c7b8fe" }}>
            <VerticalBar height={"100%"} top={0} circleTop={60} />
            <SubText>
                {"Contacts />"}
            </SubText>
            <h2 className={styles.header} style={{ color: globalState.isThemeDark ? "#fff" : "#000" }}>Find me on:</h2>
            <div className={styles.listContainer}>
                <ContactPill text={"in/kripa.bairagi"} icon={linkedIn} link={"https://www.linkedin.com/in/kripa-bairagi-78a129178/"} />
                <ContactPill text={"github.com/kripa0047"} icon={github} link={"https://github.com/kripa0047"} />
                <ContactPill text={"instagram.com/kripas.s.bairagi"} icon={instagram} link={"https://www.instagram.com/kripa.s.bairagi/"} />
                <ContactPill text={"kripabairagi0047@gmail.com"} icon={mail} link={"mailto:kripabairagi0047@gmail.com"} />
                <ContactPill text={"twitter.com/KB00471"} icon={twitter} link={"https://twitter.com/KB00471"} />
            </div>
        </div>
    );
}

export default Constants;