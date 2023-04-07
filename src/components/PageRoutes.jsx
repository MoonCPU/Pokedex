import React from "react";

import { Routes, Route, useLocation } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";

const PageRoutes = () => {
    const location = useLocation();

    return(
        <Routes>
            <Route path="/" index element={<Home />} />
                <Route path="about" element={<About />} />
        </Routes>            
    )
}

export default PageRoutes;