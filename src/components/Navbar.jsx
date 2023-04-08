import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="w-full">
            <div className="max-w-5xl mx-auto py-5 flex flex-row items-center justify-center">
                <img src="/logo.png" alt="logo" className="h-20 sm:h-28 ml-5" />
                <div className="mx-10">
                    <ul className="flex flex-row text-2xl gap-5">
                        <li className="sm:mx-5"><Link to="/">Home</Link></li>
                        <li className="sm:mx-5"><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </div>
        </div>  
    )
}

export default Navbar;