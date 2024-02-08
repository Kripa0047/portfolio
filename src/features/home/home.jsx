import React from "react";
// import styles from "./home.module.css";
import { StartDetails, Works, About, Constants } from "./components";
import { Header } from "../../core/components";
import { Helmet } from 'react-helmet';

const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title> kripa.dev</title>
            </Helmet>
            <Header />
            <StartDetails />
            <Works />
            <About />
            <Constants />
        </div>
    );
}

export default HomePage;