import React from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../pages/Home";
import About from "../pages/About";

const PageRoutes = () => {
    const location = useLocation();

    return(
        <AnimatePresence>     
            <Routes location={location} key={location.pathname}> 
                <Route path="/" index element={<Home />} />
                    <Route path="about" element={<About />} />
            </Routes>        
        </AnimatePresence>
    )
}

export default PageRoutes;