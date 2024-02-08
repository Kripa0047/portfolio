import React, { useContext } from "react";
import { TextSlider, SubText, RandomWord, VerticalBar } from "../../../../core/components";
import { GlobalStateContext } from "../../../../core/store/global_state";
import styles from "./start_details.module.css";

const StartDetails = () => {
    const globalState = useContext(GlobalStateContext);

    return (
        <div id={"start"} className={styles.container} style={{ backgroundColor: globalState.isThemeDark ? "#0f0e17" : "#fff" }}>
            {globalState.isThemeDark && <>
                <div className={styles.bgBox}></div>
                <div className={styles.bgBox} style={
                    { top: "20%", left: "80%", height: "25vw", transform: "rotate(45deg)" }
                }></div>
                <div className={styles.bgBox} style={
                    { top: "20%", left: "-10%", height: "20vw", transform: "rotate(75deg)" }
                }></div>
                <div className={styles.bgBox} style={
                    { top: "40%", left: "15%", height: "10vw", transform: "rotate(35deg)" }
                }></div>
            </>}
            <VerticalBar height={"calc(70vh - 4px)"} top={"calc(30vh + 10px)"} />
            <TextSlider delayDuration={1.9} curtainColor="#fff" style={{ marginBottom: "20px" }}>
                <SubText>
                    {"Start />"}
                </SubText>
            </TextSlider>
            <TextSlider delayDuration={1} curtainColor="#fff" style={{ marginBottom: "5px" }} >
                <h1 className={styles.headText} style={{ color: globalState.isThemeDark ? "#fff" : "#000" }}>
                    Hi, my name is <span className={styles.primaryColor}>Kripa</span>
                </h1>
            </TextSlider>
            <TextSlider delayDuration={1.7}>
                <h1 className={styles.headText} style={{ color: globalState.isThemeDark ? "#fff" : "#000" }}>I <span className={styles.design}>design</span> and develop&nbsp;
                    <RandomWord wordList={[
                        "webapps",
                        "apps",
                        "websites",
                        "things",
                    ]} initialDelay={4000} />
                </h1>
            </TextSlider>
            <TextSlider delayDuration={3} curtainColor="#fff" style={{ marginTop: "40px" }}>
                <h2 className={styles.subText}>
                    Let me show You...
                </h2>
            </TextSlider>
        </div>
    );
}

export default StartDetails;