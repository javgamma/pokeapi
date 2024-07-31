import React, { useEffect, useInsertionEffect, useLayoutEffect, useState } from 'react'
import ButtonMorePoke from './ButtonMorePoke';
import NewCard from './NewCard';
import PokeCard from './PokeCard';

const PokeSection = () => {
const[allPokemons, setAllPokemons] = useState([])
const [offset, setOffset] = useState(0);
// const [page, setPage] = useState(0);
const [hasMore, setHasMore] = useState(true);


const getPokemonAll = async (limit, offset) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
    );
    const data = await response.json();
    setAllPokemons((prevPokemons) => {
      const newPokemons = data.results.filter(
        (pokemon) => !prevPokemons.find((p) => p.name === pokemon.name)
      );
      return [...prevPokemons, ...newPokemons];
    });

    if (data.results.length < limit) {
      setHasMore(false);
    }
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  getPokemonAll(20, 0);
}, []);

const handleLoadMore = () => {
  const newOffset = offset + 10;
  setOffset(newOffset);
  getPokemonAll(10, newOffset);
};

  return (
    <div>
    <PokeCard allPokemons={allPokemons}/>
    {hasMore && <button  className='border p-3 rounded-lg font-bold bg-red-500 opacity-80 flex justify-center items-center m-auto'onClick={handleLoadMore}>Give me more!</button>}
    </div>
  )
}

export default PokeSection
