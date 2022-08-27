import React from "react";
import Logo from '../assets/logo512.png';
import '../css/navbar.css'

export default function navbar() {
  return (
    <navbar class="navbar bg-black m-0 p-0">
      <div className="logo">
        <img class="m-2"
          src={Logo}
          width="40"
          height="40"
          alt="Logo"
        />
        <span class="align-middle">MovieZ</span>
      </div>

      <div className="tabs">
        <div className="tab-button">Movies</div>
        <div className="tab-button">TV Shows</div>
        <div className="tab-button">Anime</div>
      </div>
      <div className="profile">
      </div>
    </navbar>
  );
}
