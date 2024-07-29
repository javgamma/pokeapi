import React from "react";

const Card = ({ creature, encounters }) => {
  const {
    name,
    id,
    base_experience,
    height,
    weight,
    game_indices,
    types,
    moves,
    held_items,
    sprites,
    stats,
  } = creature;

  const images = Object.values(sprites).filter(
    (sprite) => typeof sprite === "string" && !sprite.includes("versions")
  );

  return (
    <div className="flex flex-col items-center box-border">
      <div className="flex flex-col gap-3">
        <h1 className="flex  text-lg font-bold">Pokemón: {name}</h1>
        <p className="border rounded-lg p-2 box-border font-semibold">
          id: {id}
        </p>
        <p className="border rounded-lg p-2 box-border font-semibold">
          Base Experience: {base_experience}
        </p>
        <p className="border rounded-lg p-2 box-border font-semibold">
          Height: {height}
        </p>
        <p className="border rounded-lg p-2 box-border font-semibold">
          Weight: {weight}
        </p>
      </div>

      <div className=" flex flex-col w-[100%] items-center mb-4 p-5 justify-center">
        <h2 className=" flex text-2xl font-semibold w-[60px] m-3">Games</h2>
        <div className="flex flex-wrap gap-5 box-border">
          {game_indices.map((game, index) => (
            <p className="border rounded-lg  box-border p-4" key={index}>
              {game.version.name}
            </p>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Types</h2>
        <ul>
          {types.map((type, index) => (
            <li key={index}>{type.type.name}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col w-[80%] items-center mb-4 p-8">
        <h2 className=" flex text-2xl font-semibold w-[60px] m-3">Moves</h2>

        <div className="flex flex-wrap gap-5">
          {moves.map((move, index) => (
            <p
              className="border rounded-lg p-2 box-border font-semibold"
              key={index}
            >
              {move.move.name}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-col w-[400px] items-center mt-4 mb-4">
        <h2 className="text-xl font-semibold">Held Items</h2>

        <div className="w-[120px] bg-violet-400 flex justify-center border rounded-lg px-2 mt-2 mb-2">
          {held_items.map((item, index) => (
            <p key={index}>{item.item.name}</p>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center h-[400px] justify-center ">
        <h2 className="text-xl font-semibold">Location Areas</h2>
        <div className="flex flex-wrap gap-7 mt-2 justify-center text-white font-semibold">
          {encounters.map((location, index) => (
            <p
              className="w-[190px] bg-violet-400 flex justify-center border rounded-lg p-2 items-center "
              key={index}
            >
              {location.location_area.name}
            </p>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center mt-6">
        <h2 className="text-xl font-semibold">Images</h2>
        <div className="flex w-[400px] h-[300px] items-center mt-4 mb-4 justify-center">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`sprite ${index}`}
              className="w-40 h-35 m-2"
            />
          ))}
        </div>
      </div>

      <div className="mb-10 flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-4">Stats</h2>
        <div className="flex  gap-4">
          {stats.map((stat, index) => (
            <h1
              key={index}
              className="bg-gray-200 rounded p-2 flex justify-center gap-3"
            >
              <p className="text-sm">{stat.stat.name}</p>
              <p className="text-sm">{stat.base_stat}</p>
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
