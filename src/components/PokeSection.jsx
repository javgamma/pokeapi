import React, { useEffect, useInsertionEffect, useLayoutEffect, useState } from 'react'
import NewCard from './NewCard';
import PokeCard from './PokeCard';

const PokeSection = () => {
const[allPokemons, setAllPokemons] = useState([])

const getPokemonAll = async () => {
try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20');
    const data = await response.json();
    setAllPokemons(data)
    
} catch (error) {
    console.error(error)
}}


useEffect(() => {
    getPokemonAll();
 
  }, []);

  return (
    <div>
    <PokeCard allPokemons={allPokemons.results}/>
    </div>
  )
}

export default PokeSection
