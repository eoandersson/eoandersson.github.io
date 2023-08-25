import { useState } from "react";
import "../styles/Header.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <NavLink className='brand-name' to='/'>ERIK ANDERSSON</NavLink>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <NavLink to='/' onClick={() => setIsNavExpanded(false)}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about' onClick={() => setIsNavExpanded(false)}>About</NavLink>
          </li>
          <li>
            <NavLink to='/contact' onClick={() => setIsNavExpanded(false)}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
