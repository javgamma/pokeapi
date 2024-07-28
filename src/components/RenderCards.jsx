import React, { useContext, useEffect, useState } from 'react';
import { PokeContext } from '../context/ContextPoke';
import Card from './Card';
import NewCard from './NewCard';

const RenderCards = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const [encounters, setEncounters] = useState([]);
  const [error, setError] = useState(null);
  const [pikachuData, setPikachuData] = useState([])
  const {id} = useContext(PokeContext)


  const getPokemonData = async () => {
    try {
      const [pokemonResponse, encountersResponse, pikachuResponse] = await Promise.all([
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`),
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/encounters`),
        fetch(`https://pokeapi.co/api/v2/pokemon/25`)
      ]);
      
      const pokemonData = await pokemonResponse.json();
      const encountersData = await encountersResponse.json();
      const pikachuData = await pikachuResponse.json();
      
      setPokemonData(pokemonData);
      setEncounters(encountersData);
      setPikachuData(pikachuData)
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getPokemonData();
 
  }, [id]);

  if (error) return <div>Error: {error.message}</div>;
  if (!pokemonData) return <div>Loading...</div>;

  return (
    <div>
      {pokemonData && <Card key={pokemonData.id} creature={pokemonData} encounters={encounters} />}
      {pikachuData && <NewCard key={pikachuData.id} pokemon={pikachuData}/>}
    </div>
  );
};

export default RenderCards;
