import React from "react";
import Header from "./header";
import RoutesPage from "../routes";

const Layout = () => {
   return (
      <div>
         <Header />
         <div className="md:p-5">
            <RoutesPage />
         </div>
      </div>
   );
};

export default Layout;
