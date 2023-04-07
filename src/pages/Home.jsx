import React, {useState} from "react";
import { useQuery } from "react-query";
import axios from "axios";
import '../index.css';

const Home = () => {
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonID, setPokemonID] = useState("");
    const [pokemonImage, setPokemonImage] = useState("");
    const [input, setInput] = useState("");

    const fetchPokemon = async (pokemonName) => {
        const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
        if (APIResponse.status === 200){
            const data = await APIResponse.json();    
            return data;
        }
    } 

    const renderPokemon = async (pokemonName) => {
        const data = await fetchPokemon(pokemonName);

        if (data){
            setPokemonName(data.name.toUpperCase());
            setPokemonID(data.id);
            setPokemonImage(data.sprites.versions['generation-v']['black-white'].animated.front_default);            
        }
        setInput("");
    }

    //for the form
    const handleSubmit = (event) => {
        event.preventDefault();
        renderPokemon(input.toLowerCase());
    };

    //for the input
    const handleInputChange = (event) => {
        setInput(event.target.value);
    };


    return(
    <div className="inline-block mt-[5%] px-4 relative">
        <img src="pokedex.png" alt="pokedex-image" className="max-w-md w-full" />
        <h1 className="absolute text-xl font-bold color-[#aaa] top-[55%] right-[30%]">
            <span className="text-gray-600">{pokemonID}</span> - {pokemonName}
        </h1>        
        <img
            src={pokemonImage}
            className="absolute top-[33%] left-[36%] h-[15%]"
        />

        <form 
        onSubmit={handleSubmit}
        className="absolute w-[65%] bg-[#cc0000] top-[67%] left-[13%]">
            <input
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
            className="button w-[50%] p-[4%] border-2 border-[#000] rounded-[5px] text-lg text-white bg-[#444]">&lt; Prev</button>    
            <button 
            className="button w-[50%] p-[4%] border-2 border-[#000] rounded-[5px] text-lg text-white bg-[#444]">Next &gt;</button>    
        </div>     
    </div>
    )
}

export default Home;