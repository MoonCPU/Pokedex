import React from "react";
import { motion } from "framer-motion";

import {DiReact} from 'react-icons/di';

import Pokeball from "../components/Pokeball";

const pageVariants = {
    initial: { opacity: 0, y: "100%" },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: "-100%" },
    transition: {duration: 0.5}
};

const About = () => {
    return(
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition="transition"
        >
            <motion.div>
                <div className="mt-[5%]">
                    <div>
                        <h1 className="text-2xl">Made by</h1>
                        <h1 className="text-3xl flex items-center justify-center">
                            Moon Hyuk Kang
                        </h1>                    
                    </div>

                    <div className="my-10">
                        <h2 className="text-2xl">Tools and Technology</h2>  
                        <ul className="max-w-sm mx-auto text-xl">
                            <li className="flex items-center justify-center my-1">
                                <div id="spinner">
                                    <DiReact size={100} color="#61DBFB"/>     
                                </div>
                            </li>
                            <li className="my-1">Styling - Tailwind</li>
                            <li className="my-1">Animation - Framer Motion</li>
                            <li className="my-1">Routing - react-router-dom</li>
                            <li className="flex flex-row items-center justify-center my-1">
                                API - <a href="https://pokeapi.co/" target="_blank"><Pokeball ID="mymove"/></a>
                            </li>
                        </ul>
                    </div>

                    <div className="max-w-sm my-10 text-left mx-auto text-lg px-5">
                        <p className="indent-4">This website is the second project in a roadmap of four that I have planned to develop during the first semester of 2023. The theme for this one... is a Pokedex.</p>
                        <p className="indent-4 mt-2">Yes, there are as many Pokedex projects as there are stars in the sky. But as I had decided to focus on learning more about APIs this time, the Pokemon API was perfect for me. It's super famous in the dev community for being easy to use, even for beginners.</p>
                        <p className="indent-4 mt-2">Anyway, I'm satisfied with the end result, even if I had to cut on some content I was originally planning for this website. I learned a lot about handling APIs and this knowledge will certainly be useful in a very near future.</p>
                        <p className="indent-4 mt-2">Onwards to the next project! I'll see you there!</p>
                    </div>
                    <p className="mx-auto mt-4 text-[5px]">PS. Charizard is overrated. Blastoise or Venusaur is much cooler.</p>
                </div>
            </motion.div> 

        </motion.div>
    )
}

export default About;