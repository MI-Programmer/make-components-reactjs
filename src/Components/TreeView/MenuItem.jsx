import React, { useState } from "react";
import "./styles.css";
import MenuList from "./MenuList";

const MenuItem = ({ item: { label, to, children }, setIsMenuOpen }) => {
  const [isChildrenOpen, setIsChildrenOpen] = useState({});

  function handleOpenChildren(status) {
    setIsChildrenOpen({ ...isChildrenOpen, [status]: !isChildrenOpen[status] });
  }

  function handleOpenLink() {
    setIsMenuOpen(false);
  }

  return (
    <li className="menuItem">
      <div className="label">
        <a href={`#${to}`} onClick={handleOpenLink}>
          {label}
        </a>
        {children && children.length ? (
          <div onClick={() => handleOpenChildren(label)}>
            {isChildrenOpen[label] ? "-" : "+"}
          </div>
        ) : null}
      </div>
      {children && children.length && isChildrenOpen[label] ? (
        <MenuList list={children} setIsMenuOpen={setIsMenuOpen} />
      ) : null}
    </li>
  );
};

export default MenuItem;
