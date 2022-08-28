import React, { useEffect, useState } from "react";
import Logo from "../assets/logo512.png";
import "../css/navbar.css";

export default function Navbar() {
  const [menu, setMenu] = useState(document.getElementById("menu"));

  useEffect(() => {
    setMenu(document.getElementById("menu"));
  }, []);
  
  const updateMenu = ()=>{
    if(menu.style.visibility === "visible") menu.style.visibility = "hidden";
    else menu.style.visibility = "visible";
  }

  return (
    <div className="navbar bg-black m-0 p-0">
      <div className="logo">
        <img className="m-2" src={Logo} width="40" height="40" alt="Logo" />
        <span className="title">MovieZ</span>
      </div>

      <div className="tabs" id="menu">
        <div className="tab-button">Movies</div>
        <div className="tab-button">TV Shows</div>
        <div className="tab-button">Anime</div>
      </div>
      <div className="profile">
        <div className="hamburger pe-2" id="ham-btn" onClick={updateMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
}