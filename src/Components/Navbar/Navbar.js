import React, { useState } from "react";
import "./Navbar.css";
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  
  const [openMenu, setOpenMenu] = useState(false);
  const menuHandler = () => {
    setOpenMenu(true);
  };
  const closeMenuHandler=()=>{
    setOpenMenu(false);
  }
  return (
    <div className="center-flex nav-bar">
      <div className="company-name">
        <h1>floraison®</h1>
      </div>
      {!openMenu ? (
        <div className="center-flex menu">
          <h1>Menu</h1>
          <h1>
            <AiOutlineMenu id="icon" onClick={menuHandler} />
          </h1>
        </div>
      ) : (
        <div className="flex-column  menu-1">
          <h1><AiOutlineClose id="icon" onClick={closeMenuHandler}/></h1>
          <a href="#">Home</a>
          <a href="#">Our company</a>
          <a href="#">Our Leadership</a>
          <a href="#">Our Execution</a>
          <a  href="#">Local Expertise</a>
          <a href="#">Work With Us</a>
          <a href="#">Resourse Center</a>
          <a href="#">Contact Us</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
