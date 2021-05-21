import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";

const Main = () => {
  const [flowerCards, setCard] = useState([]);
  return (
    <div>
      <nav className="navbar">
        <ul className="navbarList">
          <li href="#" className="navbarLink">
            ABOUT
          </li>
          <li href="#" className="navbarLink">
            CONTACT
          </li>
          <li href="#" className="navbarLink">
            GALLERY
          </li>
        </ul>
      </nav>
      <div className="card-wrapper"></div>
    </div>
  );
};

export default Main;
