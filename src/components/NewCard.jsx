import React from "react";

const NewCard = ({ pokemon, onClick, onRemove }) => {
  if (!pokemon) return null;
  const { name, id, sprites, stats } = pokemon;

  let cssClass = "";
  if (pokemon.id % 2 === 0) {
    cssClass =
      "bg-violet-400 p-4 flex flex-col items-center rounded-xl w-[270px] min-h-[300px]";
  } else {
    cssClass =
      "bg-blue-400 p-4 flex flex-col items-center rounded-xl w-[270px] min-h-[300px]";
  }

  return (
    <div className="flex justify-center">
      <div className={cssClass}>
        <div className="bg-violet-200 mb-2 mt-4 rounded-lg p-2">
          <h1 className="text-xl font-semibold">{name}</h1>
        </div>
        <img src={sprites.front_default} alt="{name}" />
        <h1 className="text-xl font-semibold">id: {id}</h1>
        <div className=" grid grid-cols-2 gap-2">
          {stats.map((stat, index) => (
            <p key={index} className="bg-gray-200 rounded p-2 ">
              <div className="flex gap-2">
                <p className="text-sm font-semibold">{stat.stat.name}:</p>
                <p className="text-sm font-semibold">{stat.base_stat}</p>
              </div>
            </p>
          ))}
        </div>
        <div className="flex justify-between w-full p-2 mt-2">
          <button className="flex" onClick={onClick}>
            🔄
          </button>
          <button className="flex" onClick={onRemove}>
            ❌
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewCard;
