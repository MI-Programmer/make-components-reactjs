import React, { useState } from "react";
import "./styles.css";
import { FaBars, FaX } from "react-icons/fa6";
import MenuList from "./MenuList";

const TreeView = ({ menus = [] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="menuContainer">
      <div className="menu">
        <h2>1.Menu Recursive</h2>
        <div className="menuBtn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaX /> : <FaBars />}
        </div>
      </div>
      <div className={`treeViewContainer ${isMenuOpen && "active"}`}>
        {menus && menus.length ? (
          <MenuList
            list={isMenuOpen ? menus : null}
            setIsMenuOpen={setIsMenuOpen}
          />
        ) : null}
      </div>
    </div>
  );
};

export default TreeView;
