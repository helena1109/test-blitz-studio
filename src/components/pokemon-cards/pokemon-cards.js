import React, {useEffect, useState} from "react";
import PokeService from "../../services/poke-service";
import './pokemon-cards.sass';
import {withRouter} from "react-router-dom";
import Spinner from "../spinner/spinner";


const pokeService = new PokeService();

const PokemonCards = ({ history }) => {
    const [pokemonsList, setPokemonsList] = useState(null);
    const [pokemonsData, setPokemonsData] = useState(null);

    const fetchPokemons=(url)=>{
        pokeService.getPokemonList(url).then( (res) => {
            setPokemonsList(res);
            return res.results.map((pokemon)=>{
                return pokeService.getPokemonByUrl(pokemon.url)
            })
        }).then(res=> Promise.all(res).then(res=> setPokemonsData(res)))
    }

    useEffect(() => {
        fetchPokemons()
    }, [])


    if (pokemonsData) {

        return (
            <div className='pokemon-cards container-fluid'>

                <div className='row'>
                    {pokemonsData.map((poke) => {
                        return (
                            <div className='col-lg-3 col-md-6 col-12 col-center' key={poke.name}>
                                <div className='pokemon-card' onClick={() => history.push(`/pokemon/${poke.name}`)}>
                                    <div className='pokemon-card__img'>
                                        <img src={poke.sprites.other.dream_world.front_default} alt={poke.name}/>
                                    </div>
                                    <div className='pokemon-card__name'>{poke.name.toUpperCase()}</div>
                                </div>

                            </div>
                        )
                    })}
                </div>
                <div className='pokemon-cards__buttons'>
                    {pokemonsList.previous &&
                    <i className="fa fa-arrow-circle-left" aria-hidden="true"
                       onClick={() => {fetchPokemons(pokemonsList.previous)}}/>
                    }
                    {
                        pokemonsList.next &&
                        <i className="fa fa-arrow-circle-right" aria-hidden="true"
                           onClick={() => {fetchPokemons(pokemonsList.next)}}/>
                    }
                </div>
            </div>

        )
    } else {
        return (
            <Spinner/>
        )
    }
}


export default withRouter(PokemonCards);