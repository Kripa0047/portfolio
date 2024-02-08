import React, { useContext } from "react";
import styles from "./works.module.css";
import { VerticalBar, SubText, InfoCard, BGText } from "../../../../core/components";
import { GlobalStateContext } from "../../../../core/store/global_state";
import beyondexams from "../../../../assets/images/beyondexams.png";
import wooshair from "../../../../assets/images/wooshair.png";
import stickman from "../../../../assets/images/stickman.png";
import techweirdo from "../../../../assets/images/techweirdo.png";

const Works = () => {
    const globalState = useContext(GlobalStateContext);

    return (
        <div id={"work"} className={styles.container} style={{ backgroundColor: globalState.isThemeDark ? "#191527" : "#d4d1e0" }}>
            <BGText text={"WORK"} />
            <VerticalBar height={"100%"} top={0} circleTop={60} />
            <SubText>
                {"Work />"}
            </SubText>
            <div style={{ height: "100px" }}></div>
            <InfoCard
                image={wooshair}
                title={"Woosh Air"}
                link={"https://wooshair.com/"}
                details={"WooshAir specializes in the development of smart filters and air quality monitors that seamlessly communicate with mobile devices, providing real-time telemetry data."}
            />
            <InfoCard
                image={beyondexams}
                title={"BeyondExams"}
                link={"https://beyondexams.org/"}
                details={"BeyodExams is an educational platform that facilitates both instructional and learning experiences through video content, providing users with the capability to engage in teaching or learning activities."}
            />
            <InfoCard
                image={techweirdo}
                title={"TechWeirdo"}
                link={"https://techweirdo.in/"}
                details={"Techweirod operates as a service-based company, delivering an extensive array of specialized services tailored to meet the diverse needs of our clients. With a commitment to excellence and innovation, we strive to provide comprehensive solutions that exceed expectations and drive success in today's dynamic business landscape."}
            />
            <InfoCard
                image={stickman}
                title={"Stickman"}
                link={"https://www.stickmanservices.com/"}
                details={"Stickman services offers a range of services including Marketing, Digital Marketing, Trade Marketing, Branding, Growth Hacking, Technology Solutions, App Development, Website Development, Boutique Software Development, Website Design, Mobile App Marketing, Marketing Research, SEO, SEM, SMO, Event Management, and Product Launch."}
            />

        </div>
    );
}

export default Works;