import React, { useContext, useEffect, useState } from 'react'
import { PokeContext } from '../context/ContextPoke'
import NewCard from './NewCard'

const PokeCard = ({ allPokemons }) => {
  const [detailsPokemon, setDetailsPokemon] = useState([]);

  const { setId } = useContext(PokeContext);

  const getPokemonDetails = async () => {
    try {
      const responseDetails = await Promise.all(
        allPokemons.map((pokeitem) => {
          return fetch(pokeitem.url);
        })
      );

      const dataDetails = await Promise.all(
        responseDetails.map((response) => {
          return response.json();
        })
      );

      setDetailsPokemon(dataDetails);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPokemonDetails();
  }, [allPokemons]);

  console.log(detailsPokemon);

  const handleIdPoke = (id) => {
    return setId(id);
  };

//   function handleRemovePokemon(id) {
//     setDetailsPokemon((prevDetails) =>
//       prevDetails.filter((pokemon) => pokemon.id !== id)
//     );
//   }

function handleRemovePokemon(id) {
    setDetailsPokemon((prevDetails) => {
      const index = prevDetails.findIndex((pokemon) => pokemon.id === id);
      if (index !== -1) {
        const newDetails = [...prevDetails];
        newDetails.splice(index, 1);
        return newDetails;
      }
      return prevDetails;
    });
  }
  



  return (
    <div className="mt-2 pb-4 grid grid-cols-5 gap-3">
      {detailsPokemon.map((pokemon, i) => {
        return (
          <NewCard
            key={i}
            pokemon={pokemon}
            onClick={() => handleIdPoke(pokemon.id)}
            onRemove={() => handleRemovePokemon(pokemon.id)}
          />
        );
      })}
    </div>
  );
};

export default PokeCard
