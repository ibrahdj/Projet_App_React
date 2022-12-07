import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from './models/pokemon';
import POKEMONS from './models/mock-pokemon';
import PokemonList from './pages/pokemon-list';

const App: FunctionComponent = () => {
 const [pokemons, setPokemons] = useState<Pokemon[]>([]);

 useEffect(()=>{
    setPokemons(POKEMONS);
 }, []);
 return (
  <PokemonList/>
 )
}
  
export default App;


// import React from 'react';

// export default class App extends React.Component{
//     const name: string = "React";

//     render(){
//         return <h1>Hello, {name} </h1>;
//     }
// }