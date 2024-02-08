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
                contributions={[
                    "- Contributed to the development of an intelligent air filtration system coupled with an air quality monitoring solution.",
                    "- Architected and implemented the mobile application, facilitating user onboarding processes and providing real-time device telemetry insights.",
                    "- Engineered an onboarding workflow for establishing seamless integration between the mobile application and the smart module/air quality monitor.",
                    "- Worked on pipelines for building and deploying application.",
                    "- Implemented deep links and notifications on the application.",
                    "- Flutter, BLoC, Firebase, ReactJS, NodeJS"
                ]}
            />
            <InfoCard
                image={beyondexams}
                title={"BeyondExams"}
                link={"https://beyondexams.org/"}
                details={"BeyodExams is an educational platform that facilitates both instructional and learning experiences through video content, providing users with the capability to engage in teaching or learning activities."}
                contributions={[
                    "- Beyondexams is an educational platform that facilitates both instructional and learning experiences through video content, providing users with the capability to engage in teaching or learning activities",
                    "- Engaged in the design and implementation of an aesthetically pleasing and functionally robust user interface.",
                    "- Implemented and tested the API integration.",
                    "- Created a responsive User Interface for different window sizes.",
                    "- Technologies/Frameworks: ReactJS, NodeJS"
                ]}
            />
            <InfoCard
                image={techweirdo}
                title={"TechWeirdo"}
                link={"https://techweirdo.in/"}
                details={"Techweirod operates as a service-based company, delivering an extensive array of specialized services tailored to meet the diverse needs of our clients. With a commitment to excellence and innovation, we strive to provide comprehensive solutions that exceed expectations and drive success in today's dynamic business landscape."}
                contributions={[
                    "- Conceived and implemented client-requested applications, assuming end-to-end project ownership and actively engaging in client interactions throughout the development lifecycle.",
                    "- Created algorithms to parse Excel file and extract data in order.",
                    "- Created mobile application, web application and backend application.",
                    "- Managed and trained interns on various projects with task allocation using Waterfall Model.",
                    "- Technologies/Frameworks: Flutter, NodeJS(Express), ReactJS, MongoDB, REST APIs"
                ]}
            />
            <InfoCard
                image={stickman}
                title={"Stickman"}
                link={"https://www.stickmanservices.com/"}
                details={"Stickman services offers a range of services including Marketing, Digital Marketing, Trade Marketing, Branding, Growth Hacking, Technology Solutions, App Development, Website Development, Boutique Software Development, Website Design, Mobile App Marketing, Marketing Research, SEO, SEM, SMO, Event Management, and Product Launch."}
                contributions={[
                    "- Designed and developed web application for e-commerce site for users, sellers and admin panel.",
                    "- Designed and developed a quiz platform.",
                    "- Technologies/Frameworks: ReactJS, MongoDB, REST APIs"
                ]}
            />

        </div>
    );
}

export default Works;