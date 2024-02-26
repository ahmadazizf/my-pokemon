import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import ListSection from "./component/listSection";
import Card from "./component/card";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon, selectAllPokemon, selectStatus } from "../../store/pokemon";
import { useNavigate } from "react-router-dom";

function ListPokemon() {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const pokemonList = useSelector(selectAllPokemon);
   const totalData = useSelector((state) => state.pokemon.totalData);
   const status = useSelector(selectStatus);

   const containerRef = useRef(null);

   useEffect(() => {
      if (pokemonList.length === 0) dispatch(getPokemon({ limit: 25, offset: 0 }));
   }, [dispatch]);

   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            const firstEntry = entries[0];
            if (firstEntry.isIntersecting && status !== "loading") {
               dispatch(getPokemon({ limit: 25, offset: pokemonList.length }));
            }
         },
         {
            threshold: 0.1, // Trigger when 10% of the target is visible
         }
      );

      if (containerRef.current) {
         observer.observe(containerRef.current);
      }

      return () => {
         if (containerRef.current) {
            observer.unobserve(containerRef.current);
         }
      };
   }, [status]);

   const handleClick = (res) => {
      navigate("detail", { state: res.name });
   };

   const handleMore = () => {
      if (pokemonList.length <= totalData) {
         dispatch(getPokemon({ limit: 25, offset: pokemonList.length }));
      }
   };

   // useEffect(() => {
   //    // getDataList();
   //    if (!pokemonList || pokemonList.length === 0) {
   //       dispatch(getPokemon({ limit: 25, offset: 0 }));
   //    }
   // }, [dispatch]);

   return (
      <div className="relative">
         <div style={{ maxHeight: "75vh" }} className="text-left overflow-y-scroll">
            <ListSection>
               {pokemonList?.map((res, i) => (
                  <Card onClick={() => handleClick(res)} data={res} key={i} />
               ))}
               <div ref={containerRef} className="flex justify-center">
                  {status === "loading" ? "Loading..." : <button onClick={() => handleMore()}>Load More</button>}
               </div>
            </ListSection>
            {/* <div className="flex justify-center">{status === "loading" ? "Loading..." : <button onClick={() => handleMore()}>Load More</button>}</div> */}
         </div>
      </div>
   );
}

export default ListPokemon;
