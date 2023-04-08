import React from "react";
import { motion } from "framer-motion";

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
                <div className="mt-[10%]">
                    <div>
                        <h1 className="text-2xl">Made by</h1>
                        <h1 className="text-3xl">Moon Hyuk Kang</h1>                    
                    </div>

                    <div className="my-5">
                        <h2 className="text-2xl">Tools and Technology</h2>  
                        <ul className="max-w-xs text-center mx-auto">
                            <li>Front-End - React</li>
                            <li>Styling - Tailwind</li>
                        </ul>
                    </div>
                </div>
            </motion.div>

        </motion.div>
    )
}

export default About;