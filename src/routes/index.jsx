import React from "react";
import ComparePage from "../pages/compare";
import ListPokemon from "../pages/list";
import { Route, Routes } from "react-router-dom";
import DetailPokemon from "../pages/detail";

const RoutesPage = () => {
   return (
      <Routes>
         <Route path="/" element={<ListPokemon />} />
         <Route path="/detail" element={<DetailPokemon />} />
         <Route path="/compare" element={<ComparePage />} />
      </Routes>
   );
};

export default RoutesPage;
