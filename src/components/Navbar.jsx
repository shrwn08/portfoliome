import React from "react";

function Navbar() {
  return (
    <nav>
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          Shrawan<span>.</span>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <a href="mailto:shrwnkumar08@gmail.com" className="nav-cta">
          Hire Me ↗
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
