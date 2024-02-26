import axios from "axios";
import React, { useEffect, useState } from "react";
import { Colors } from "../../../util/color";
import { useNavigate } from "react-router-dom";

const Card = ({ data, indexs, onClick }) => {
   const navigate = useNavigate();
   //    const [detail, setDetail] = useState([]);
   //    const [loading, setLoading] = useState(false);

   return (
      <div
         onClick={onClick}
         className="animate-fade-down flex justify-between gap-24 p-5  rounded-md shadow-md hover:shadow-yellow-400"
         key={indexs}
         style={{ cursor: "pointer", backgroundColor: Colors[data.type] }}
      >
         <p className="font-semibold text-white">{data?.name}</p>
         <div>
            <img style={{ width: 100, height: 75 }} src={data.image} alt={data?.name} />
         </div>
      </div>
   );
};

export default Card;
