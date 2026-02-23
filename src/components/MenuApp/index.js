import React from "react";
import MenuItem from "../MenuItem";

const MenuApp = ({ data }) => {
  return (
    <div className="App">
      {data.map((item) => (
        
        <MenuItem key={item.itemId} {...item} />
      ))}
    </div>
  );
};

export default MenuApp;