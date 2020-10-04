import React, {useEffect, useState} from "react";
import PokeService from "../../services/poke-service";
import './pokemon-info.sass'
import Spinner from "../spinner/spinner";

const pokeService =new PokeService();
const PokemonInfo =({pokeName})=>{
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(()=>{
        pokeService.getPokemonByName(pokeName).then(res=> setPokemonData(res))
    }, [pokeName])

    return(
        pokemonData?
        <div className='container profile'>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12 col-center'>
                    <div className='profile__img'>
                        <img src={pokemonData.sprites.other.dream_world.front_default} alt={pokemonData.name}/>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='profile__info'>
                        <h2>#{pokemonData.id} {pokemonData.name.toUpperCase()}  </h2>
                        <div className='profile__info__block'>
                            <div className='profile__info__title'> Abilities: </div>
                            {pokemonData.abilities.map(ab=>{
                                return(
                                    <li key={ab.ability.name}>{ab.ability.name}</li>
                                )
                            })}
                        </div>
                        <div>
                            <div className='profile__info__title'> Height: </div>
                            <li> {pokemonData.height}</li>
                        </div>
                        <div>
                            <div className='profile__info__title'> Weight: </div>
                            <li> {pokemonData.weight}</li>
                        </div>
                        <div>
                            <div className='profile__info__title '> Stats: </div>
                            <ul className='profile__info__stats'>
                                {pokemonData.stats.map(stat=>{
                                    return(
                                        <li key={stat.stat.name}> {stat.stat.name}: {stat.base_stat} </li>
                                    )
                                })}
                            </ul>

                        </div>


                    </div>
                </div>
            </div>

        </div>
            :  <Spinner/>
    )
}



export default PokemonInfo;