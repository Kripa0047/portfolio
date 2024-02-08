import React, { useContext } from "react";
import { GlobalStateContext } from "../../../../core/store/global_state";
import { VerticalBar, SubText, CodeView } from "../../../../core/components";
import styles from "./about.module.css";

const About = () => {
    const globalState = useContext(GlobalStateContext);

    return (
        <div id="about" className={styles.container} style={{ background: globalState.isThemeDark ? "#14121C" : "#ccbfff" }}>
            <VerticalBar height={"100%"} top={"0"} circleTop={"107px"} />
            <SubText>
                <span className={styles.header}>{"About />"}</span>
            </SubText>
            <CodeView />
        </div>
    );
}

export default About;