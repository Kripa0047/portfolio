import React from "react";
// import styles from "./home.module.css";
import { StartDetails, Works, About, Constants } from "./components";
import { Header } from "../../core/components";

const HomePage = () => {
    return (
        <div>
            <Header />
            <StartDetails />
            <Works />
            <About />
            <Constants />
        </div>
    );
}

export default HomePage;