import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Progress, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import ListSection from "../list/component/listSection";
import Card from "../list/component/card";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon, selectAllPokemon, selectStatus } from "../../store/pokemon";
import { Colors } from "../../util/color";

const ComparePage = () => {
   const dispatch = useDispatch();
   const [openModal, setOpenModal] = useState(false);
   const [pokemon, setPokemon] = useState({
      pokemonA: null,
      pokemonB: null,
   });
   const pokemonList = useSelector(selectAllPokemon);
   const totalData = useSelector((state) => state.pokemon.totalData);
   const status = useSelector(selectStatus);

   const handleModal = () => setOpenModal(!openModal);

   const handleMore = () => {
      if (pokemonList.length <= totalData) {
         dispatch(getPokemon({ limit: 25, offset: pokemonList.length }));
      }
   };
   const handleChoose = () => {
      if (pokemon?.pokemonA?.name && pokemon?.pokemonB?.name) {
         setPokemon({
            pokemonA: null,
            pokemonB: null,
         });
      }
      handleModal();
   };

   const pickPokemon = (data) => {
      let datas = {
         ...data,
         result: data.stats.hp + data.stats.attact + data.stats.defense + data.stats.specialAttact + data.stats.specialDefense + data.stats.speed,
      };
      if (!pokemon.pokemonA?.name) {
         setPokemon({
            ...pokemon,
            pokemonA: datas,
         });
      }
      if (!pokemon.pokemonB?.name && pokemon.pokemonA?.name) {
         setPokemon({
            ...pokemon,
            pokemonB: datas,
         });
      }
      handleModal();
   };

   return (
      <div>
         <Button className="my-3 animate-fade-down" variant="gradient" onClick={handleChoose}>
            Choose Pokemon
         </Button>
         <div className="shadow-white shadow-md mt-2 rounded-md">
            <div
               style={{ display: pokemon?.pokemonA?.name ? "flex" : "none" }}
               className="animate-fade-down flex justify-between gap-24 p-5 bg-blue-500 rounded-t-md border-r-2 border-l-2 border-white "
               key={pokemon?.pokemonA?.id}
            >
               <div>
                  <h2 className="font-bold text-lg text-left">{pokemon?.pokemonA?.name.charAt(0).toUpperCase() + pokemon?.pokemonA?.name.slice(1) ?? ""}</h2>
                  <div className="p-1 text-left md:flex gap-10">
                     <p>Height: {pokemon?.pokemonA?.information?.height}</p>
                     <p>Weight: {pokemon?.pokemonA?.information?.weight}</p>
                     <p>Types: {pokemon?.pokemonA?.information?.types}</p>
                  </div>
               </div>
               <div className="animate-flip-up animate-duration-1000">
                  <img style={{ width: 100, height: 75 }} src={pokemon?.pokemonA?.image} alt={pokemon?.pokemonA?.name} />
                  <Typography>Total Stats: {pokemon?.pokemonA?.result ?? ""}</Typography>
               </div>
            </div>
            <div
               style={{ display: pokemon?.pokemonB?.name ? "flex" : "none" }}
               className="animate-fade-down flex justify-between gap-24 p-5 bg-red-500 rounded-b-md border-r-2 border-l-2 border-b-2 border-white "
               key={pokemon?.pokemonB?.id}
            >
               <div>
                  <h2 className="font-bold text-lg text-left">{pokemon?.pokemonB?.name.charAt(0).toUpperCase() + pokemon?.pokemonB?.name.slice(1) ?? ""}</h2>
                  <div className="p-1 text-left md:flex gap-10">
                     <p>Height: {pokemon?.pokemonB?.information?.height}</p>
                     <p>Weight: {pokemon?.pokemonB?.information?.weight}</p>
                     <p>Types: {pokemon?.pokemonB?.information?.types}</p>
                  </div>
               </div>
               <div className="animate-flip-up animate-duration-1000">
                  <img style={{ width: 100, height: 75 }} src={pokemon?.pokemonB?.image} alt={pokemon?.pokemonB?.name} />
                  <Typography>Total Stats: {pokemon?.pokemonB?.result ?? ""}</Typography>
               </div>
            </div>
         </div>

         {/* Compare Stats */}
         <div style={{ display: pokemon?.pokemonA?.name && pokemon?.pokemonB?.name ? "block" : "none" }} className=" text-left mt-5 mb-7 ">
            <Typography className="font-bold">Stats Detail</Typography>
            <div className="flex mt-2 gap-5 rounded shadow-blue-gray-200 shadow-md p-2">
               <div className="grid text-sm font-semibold gap-3 text-left">
                  <Typography>HP </Typography>
                  <Typography>Attack</Typography>
                  <Typography>Defense</Typography>
                  <Typography>Sp.Atk</Typography>
                  <Typography>Sp.Def</Typography>
                  <Typography>Speed</Typography>
               </div>
               <div className="grid text-sm gap-3 text-left">
                  <Typography>{pokemon?.pokemonA?.stats?.hp ?? ""}</Typography>
                  <Typography>{pokemon?.pokemonB?.stats?.hp ?? ""}</Typography>
                  <Typography>{pokemon?.pokemonA?.stats?.attact ?? ""}</Typography>
                  <Typography>{pokemon?.pokemonB?.stats?.attact ?? ""}</Typography>
                  <Typography>{pokemon?.pokemonA?.stats?.defense ?? ""}</Typography>
                  <Typography>{pokemon?.pokemonB?.stats?.defense ?? ""}</Typography>
                  <Typography>{pokemon?.pokemonA?.stats?.specialAttact ?? ""}</Typography>
                  <Typography>{pokemon?.pokemonB?.stats?.specialAttact ?? ""}</Typography>
                  <Typography>{pokemon?.pokemonA?.stats?.specialDefense ?? ""}</Typography>
                  <Typography>{pokemon?.pokemonB?.stats?.specialDefense ?? ""}</Typography>
                  <Typography>{pokemon?.pokemonA?.stats?.speed ?? ""}</Typography>
                  <Typography>{pokemon?.pokemonB?.stats?.speed ?? ""}</Typography>{" "}
               </div>
               <div className="animate-fade-right grid mt-1 w-full text-sm gap-5 px-1 pt-1 text-left">
                  <Progress value={pokemon?.pokemonA?.stats?.hp ?? 0} color={"blue"} />
                  <Progress value={pokemon?.pokemonB?.stats?.hp ?? 0} color={"red"} />
                  <Progress value={pokemon?.pokemonA?.stats?.attact ?? 0} color={"blue"} />
                  <Progress value={pokemon?.pokemonB?.stats?.attact ?? 0} color={"red"} />
                  <Progress value={pokemon?.pokemonA?.stats?.defense ?? 0} color={"blue"} />
                  <Progress value={pokemon?.pokemonB?.stats?.defense ?? 0} color={"red"} />
                  <Progress value={pokemon?.pokemonA?.stats?.specialAttact ?? 0} color={"blue"} />
                  <Progress value={pokemon?.pokemonB?.stats?.specialAttact ?? 0} color={"red"} />
                  <Progress value={pokemon?.pokemonA?.stats?.specialDefense ?? 0} color={"blue"} />
                  <Progress value={pokemon?.pokemonB?.stats?.specialDefense ?? 0} color={"red"} />
                  <Progress value={pokemon?.pokemonA?.stats?.speed ?? 0} color={"blue"} />
                  <Progress value={pokemon?.pokemonB?.stats?.speed ?? 0} color={"red"} />
               </div>
            </div>
         </div>
         {/* Dialog */}
         <div>
            <Dialog open={openModal} handler={handleModal}>
               <DialogHeader>Choose Pokemon</DialogHeader>
               <DialogBody>
                  <div className="max-h-80 overflow-y-scroll">
                     <ListSection>
                        {pokemonList?.map((res, i) => (
                           <Card data={res} key={i} onClick={() => pickPokemon(res)} />
                        ))}
                     </ListSection>
                     {status === "loading" ? "Loading..." : ""}
                  </div>
               </DialogBody>
               <DialogFooter>
                  <div className="flex justify-center">
                     {" "}
                     <Button onClick={() => handleMore()} variant="gradient">
                        Load More
                     </Button>
                  </div>
               </DialogFooter>
            </Dialog>
         </div>
      </div>
   );
};

export default ComparePage;
