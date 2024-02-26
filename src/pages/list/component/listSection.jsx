import React from "react";

const ListSection = ({ children, ref }) => {
   return (
      <div ref={ref} className="p-3 grid gap-3 overscroll-contain">
         {children}
      </div>
   );
};

export default ListSection;
