import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="w-full">
            <div className="max-w-5xl mx-auto py-5 flex flex-row items-center justify-center">
                <h1 className="text-3xl sm:text-5xl mx-5">POKÉDEX</h1>   
                <div className="mx-5">
                    <ul className="flex flex-row text-2xl">
                        <li className="mx-5"><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </div>
        </div>  
    )
}

export default Navbar;