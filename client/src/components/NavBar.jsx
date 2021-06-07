import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbarList">
          <li>
            <a href="/about" className="navbarLink">
              About
            </a>
          </li>
          <li>
            <a href="/main" className="navbarLink">
              Flowers
            </a>
          </li>
          <li>
            <a href="/gallery" className="navbarLink">
              Gallery
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
