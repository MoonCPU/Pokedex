import React, {useState} from "react";
import axios from "axios";
import '../index.css';
import { motion } from "framer-motion";

const pageVariants = {
    initial: { opacity: 0, y: "100%" },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: "-100%" },
    transition: {duration: 0.5}
};

const Home = () => {
    const [pokemonName, setPokemonName] = useState("BULBASAUR");
    const [pokemonID, setPokemonID] = useState(1);
    const [pokemonImage, setPokemonImage] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif");
    const [input, setInput] = useState("");

    const fetchPokemon = async (pokemonName) => {
        const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
        if (APIResponse.status === 200){
            const data = await APIResponse.json();    
            return data;
        }
    } 

    const renderPokemon = async (pokemonName) => {
        setPokemonName("Loading...");
        const data = await fetchPokemon(pokemonName);

        if (data) {
            setPokemonName(data.name.toUpperCase());
            setPokemonID(data.id);
            setPokemonImage(data.sprites.versions['generation-v']['black-white'].animated.front_default);            
        } else {
            setPokemonName("404 - NOT FOUND!");
            setPokemonID("");
            setPokemonImage("");
        }
    }

    //for the form
    const handleSubmit = (event) => {
        event.preventDefault();
        renderPokemon(input.toLowerCase());
        setInput("");
    };

    //for the input
    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handleNext = async () => {
        const nextPokemonID = pokemonID + 1;
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nextPokemonID}`);
        
        if (response.status === 200) {
          const nextPokemonName = response.data.name;
          renderPokemon(nextPokemonName);
          setPokemonID(nextPokemonID);
        } else {
          console.log('Pokemon not found.');
        }
    }


    const handlePrev = async () => {
        const prevPokemonID = pokemonID - 1;
        if (prevPokemonID < 1) {
            console.log('Nothing to see here!');
            return;
        }
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${prevPokemonID}`);
        
        if (response.status === 200) {
          const prevPokemonName = response.data.name;
          renderPokemon(prevPokemonName);
          setPokemonID(prevPokemonID);
        } else {
          console.log('Pokemon not found.');
        }
    }

    return(
        <motion.div 
        className="inline-block mt-[5%] px-4 relative"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition="transition"
    >
        <motion.div className="relative">
            <img src="pokedex.png" alt="pokedex-image" className="max-w-md w-full" />
            <h1 className="absolute text-xl font-bold color-[#aaa] top-[55%] right-[28%]">
                <span className="text-gray-600">{pokemonID}</span> - {pokemonName}
            </h1>        
            <img
                src={pokemonImage}
                className="absolute top-[32%] left-[34%] h-[17%]"
            />

            <form 
            onSubmit={handleSubmit}
            className="absolute w-[65%] bg-[#cc0000] top-[67%] left-[13%]">
                <input
                    value={input}
                    onChange={handleInputChange}
                    style={{ boxShadow: '-3px 4px 0 #888, -5px 7px 0 #333' }}
                    className="w-[100%] p-[4%] outline-none border-2 border-[#333] rounded-[5px] font-[600] text-[#3a444d] text-lg" 
                    type="search" 
                    placeholder="Name or Number" 
                    required 
                />
            </form>   

            <div className="absolute bottom-[10%] w-[65%] left-[12.5%] flex flex-row gap-5">
                <button
                onClick={handlePrev}
                className="button w-[50%] p-[4%] border-2 border-[#000] rounded-[5px] text-lg text-white bg-[#444]">&lt; Prev</button>    
                <button 
                onClick={handleNext}
                className="button w-[50%] p-[4%] border-2 border-[#000] rounded-[5px] text-lg text-white bg-[#444]">Next &gt;</button>    
            </div>                 
        </motion.div>

    </motion.div>
    )
}

export default Home;