import React, {useState, useEffect} from "react";
import PokeService from "../../services/poke-service";
import Spinner from "../spinner/spinner";
import './pokemon-list.sass'
import {withRouter} from "react-router-dom";

const pokeService = new PokeService();
const PokemonList = ({history}) => {
    const [pokemonsList, setPokemonsList] = useState({initialList: null, filterList: null});
    const [inputValue, setValue] = useState('');

    const fetchPokemonList=(url)=>{
        pokeService.getPokemonList(url).then(res=> setPokemonsList({initialList: res.results, filterList: res.results}))
    }

    useEffect(() => {
       fetchPokemonList('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1200')
    }, [])

    useEffect(() => {
        pokemonsList.initialList && searchData()
    }, [inputValue])


    const searchData = () => {
        const filter = pokemonsList.initialList.filter(pokemon => {
            return (pokemon.name.includes(inputValue.toLocaleLowerCase()));
        });

        setPokemonsList((s) => {
            return {
                initialList: s.initialList,
                filterList: filter
            }
        })

    };

    return (
        pokemonsList.filterList ?
            <div className='pokemon-list container-fluid'>
                <div className='search-bar'>
                    <div className='search-bar__title'>
                        Find your favourite pokemon
                        <i className="fa fa-arrow-right" aria-hidden="true"/>
                    </div>
                    <div className='search-bar__wrapper'>
                        <i className="fa fa-search" aria-hidden="true"/>
                        <input placeholder='Type name'
                               value={inputValue}
                               onChange={(e) => setValue(e.target.value)}/>
                        {inputValue && <i className="fa fa-times-circle" onClick={() => setValue('')}/>}
                    </div>
                </div>

                <div className='row'>
                    {
                            pokemonsList.filterList.map((pokemon) => {
                                return (
                                    <div key={pokemon.name} className='col-lg-3 col-md-6 col-12'>
                                        <li
                                            onClick={() => history.push(`/pokemon/${pokemon.name}`)}>
                                            {pokemon.name.toUpperCase()}
                                        </li>
                                    </div>
                                )
                            })
                    })
                    }
                </div>


            </div> : <Spinner/>

    )
}

export default withRouter(PokemonList);