import React from 'react';
import Header from "../header/header";
import {Route, Switch} from 'react-router-dom';
import HomePage from "../../pages/home-page";
import PokemonPage from "../../pages/pokemon-page";
import './app.sass'
import 'antd/dist/antd.css';
import PokemonListPage from "../../pages/pokemon-list-page";


function App() {

  return (
    <div className="app">
        <Header/>

        <Switch>
            <Route
                path="/"
                component={HomePage}
                exact/>

            <Route path='/pokemon/:name'
                   render={({match}) => {
                       const {name} = match.params;
                       return <PokemonPage pokeName={name}/>

                   }}/>

            <Route
                path="/pokemons"
                component={PokemonListPage}
                exact
                />

        </Switch>

    </div>
  );
}

export default App;
