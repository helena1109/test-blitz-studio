export default class PokeService {
    _apiBase = 'https://pokeapi.co/api/v2/'

    getPokemonList = async (url=`${this._apiBase}pokemon?offset=0&limit=20`) => {
        const res= await fetch(url)
        return await res.json()
    }

    getPokemonByUrl = async (url) => {
        const res= await fetch(url)
        return await res.json()
    }

    getPokemonByName = async (name) => {
        const res= await fetch(`${this._apiBase}pokemon/${name}`)
        return await res.json()
    }

}

