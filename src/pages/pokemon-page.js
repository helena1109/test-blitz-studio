import React from "react";
import PokemonInfo from "../components/pokemon-info/pokemon-info";

const PokemonPage =({pokeName})=>{
    return(
        <PokemonInfo pokeName={pokeName}/>
    )
}

export default PokemonPage;