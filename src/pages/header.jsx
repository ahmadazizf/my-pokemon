import React, { useState } from "react";
import { Link } from "react-router-dom";
import { pokemonLogo } from "../assets";

const Header = () => {
   const [selected, setSelected] = useState("list");
   return (
      <div>
         <div className=" animate-fade-down flex justify-between pb-3 z-10">
            <div className="md:flex hidden ">
               <div className="text-2xl px-2 py-1 rounded-md shadow-yellow-200 shadow">Pokemonku</div>
            </div>
            <img src={pokemonLogo} style={{ width: 80, height: 70 }} className="-my-5 ml-0 md:ml-7" />
            <div className="flex gap-3">
               <Link className={selected === "list" ? "px-2 py-2 rounded-md shadow-blue-200 shadow w-20" : "w-20 px-2 py-2 rounded-md"} to="/" onClick={() => setSelected("list")}>
                  List
               </Link>
               <Link
                  className={selected !== "list" ? "px-2 w-20 py-2 rounded-md shadow-blue-200 shadow animate-none" : " w-20 px-2 py-2 rounded-md"}
                  to="/compare"
                  onClick={() => setSelected("compare")}
               >
                  Compare
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Header;
