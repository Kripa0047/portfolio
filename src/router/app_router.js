import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../features";
import { Footer } from "../core/components";

const AppRouter = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route exact path="/" element={<HomePage />}></Route>
            </Routes>
            <Footer />
        </React.Fragment>
    );
};

export default AppRouter;
