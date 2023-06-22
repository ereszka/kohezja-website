import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {

    return (
        <nav>
          <ul className="nav-links">

            <NavLink className = "nav-link" to='/'>
              Fundacja Kohezja
            </NavLink>

            <NavLink className = "nav-link" to='/actions'>
              <li>Działania</li>
            </NavLink>

            <NavLink className="nav-link" to='/team'>
              <li>Zespół</li>
            </NavLink>

            <NavLink className="nav-link" to='/documents'>
              <li>Dokumenty</li>
            </NavLink>

            <NavLink className="nav-link" to='/donate'>
              <li>Wesprzyj nas!</li>
            </NavLink>

            <NavLink className="nav-link" to='/contact'>
              <li>Kontakt</li>
            </NavLink>

          </ul>
        </nav>
    );
}

export default Navbar;