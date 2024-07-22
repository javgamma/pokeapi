import React, { useEffect, useState } from 'react';
import Card from './Card';

const RenderCards = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const [encounters, setEncounters] = useState([]);
  const [error, setError] = useState(null);

  const getPokemonData = async (id) => {
    try {
      const [pokemonResponse, encountersResponse] = await Promise.all([
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`),
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/encounters`)
      ]);
      
      const pokemonData = await pokemonResponse.json();
      const encountersData = await encountersResponse.json();
      
      setPokemonData(pokemonData);
      setEncounters(encountersData);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getPokemonData(122); // ID de Electabuzz
  }, []);

  if (error) return <div>Error: {error.message}</div>;
  if (!pokemonData) return <div>Loading...</div>;

  return (
    <div>
      {pokemonData && <Card key={pokemonData.id} creature={pokemonData} encounters={encounters} />}
    </div>
  );
};

export default RenderCards;
