import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { filterPokemonByName } from "../../store/pokemon";
import Card from "../list/component/card";
import { Colors } from "../../util/color";
import { Progress } from "@material-tailwind/react";

const DetailPokemon = () => {
   const location = useLocation();
   const dispatch = useDispatch();

   const filterPokemon = useSelector((state) => state.pokemon.filteredData);

   useEffect(() => {
      if (location.state) {
         dispatch(filterPokemonByName({ name: location.state }));
      }
   }, []);

   console.log(filterPokemon);

   return (
      <div className="flex-col justify-between">
         <div className="">
            <div className="animate-fade-down flex justify-between gap-24 p-5  rounded-t-md shadow-md -mb-5 " key={filterPokemon?.id} style={{ backgroundColor: Colors[filterPokemon.type] }}>
               <div>
                  <h2 className="font-bold text-lg text-left">{filterPokemon?.name}</h2>
                  <div className="p-1 text-left md:flex md:text-base text-xs gap-10">
                     <p>Height: {filterPokemon?.information?.height}</p>
                     <p>Weight: {filterPokemon?.information?.weight}</p>
                     <p>Types: {filterPokemon?.information?.types}</p>
                  </div>
               </div>
               <div className="animate-flip-up animate-duration-1000">
                  <img style={{ width: 100, height: 75 }} src={filterPokemon.image} alt={filterPokemon?.name} />
               </div>
            </div>
         </div>
         <div style={{ minHeight: "100vh", minWidth: "100%" }} className="text-black justify-between p-5 bottom-0 animate-fade-up min-h-screen gap-4 rounded-t-3xl bg-white md:grid grid-cols-2">
            {/* stats */}
            <div className=" text-left mb-7 ">
               <text className="font-bold">Stats</text>
               <div className="flex mt-2 gap-5 rounded shadow-blue-gray-200 shadow-md p-2">
                  <div className="grid text-sm font-semibold gap-3 text-left">
                     <text>HP </text>
                     <text>Attack</text>
                     <text>Defense</text>
                     <text>Sp.Atk</text>
                     <text>Sp.Def</text>
                     <text>Speed</text>
                  </div>
                  <div className="grid text-sm gap-3 text-left">
                     <text>{filterPokemon?.stats?.hp}</text>
                     <text>{filterPokemon?.stats?.attact}</text>
                     <text>{filterPokemon?.stats?.defense}</text>
                     <text>{filterPokemon?.stats?.specialAttact}</text>
                     <text>{filterPokemon?.stats?.specialDefense}</text>
                     <text>{filterPokemon?.stats?.speed}</text>
                  </div>
                  <div className="animate-fade-right grid mt-1 w-full text-sm gap-5 px-1 text-left">
                     <Progress value={filterPokemon?.stats?.hp} color={"teal"} />
                     <Progress value={filterPokemon?.stats?.attact} color={"teal"} />
                     <Progress value={filterPokemon?.stats?.defense} color={"teal"} />
                     <Progress value={filterPokemon?.stats?.specialAttact} color={"teal"} />
                     <Progress value={filterPokemon?.stats?.specialDefense} color={"teal"} />
                     <Progress value={filterPokemon?.stats?.speed} color={"teal"} />
                  </div>
               </div>
            </div>
            {/* Abilities */}
            <div className="text-left">
               <text className="font-bold">Abilities</text>
               <div className="grid mt-2 font-semibold text-left">
                  {filterPokemon?.abilities?.map((item, i) => (
                     <text key={i}>- {item.ability.name}</text>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default DetailPokemon;
