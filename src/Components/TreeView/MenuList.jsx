import React from "react";
import "./styles.css";
import MenuItem from "./MenuItem";

const MenuList = ({ list, setIsMenuOpen }) => {
  return (
    <ul className="menuList">
      {list && list.length
        ? list.map((listItem, id) => (
            <MenuItem key={id} item={listItem} setIsMenuOpen={setIsMenuOpen} />
          ))
        : null}
    </ul>
  );
};

export default MenuList;
