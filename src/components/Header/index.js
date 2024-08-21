import React, { useState, useEffect } from 'react'
import {
  faBars
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowResize } from '../../hooks/useWindowResize';

// https://codesandbox.io/p/sandbox/react-responsive-navbar-1chg6?file=%2Fsrc%2Findex.js
const Index = () => {
  const [width, height] = useWindowResize();
  const [active, setActive] = useState(false);

  const handleHambugerClick = () => {
    setActive((prevState) => !prevState);
  }

  return (
    <header className="header">
      <nav>
        <div className="logo">
          <a href="index.html">
            <h1>Dev_Story</h1>
          </a>
        </div>
        {
          width <= 768 ?
            (
              <>
                <div className="menu-hambuger" onClick={handleHambugerClick}>
                  <FontAwesomeIcon
                    style={{ color: "#0ef" }}
                    icon={faBars} />
                </div>
                {active ?
                  <ul className="menu">
                    <li>
                      <a href="#">
                        <h1>Home</h1>
                      </a>
                    </li>
                    <li>
                      <a href="#work">
                        <h1>Work</h1>
                      </a>
                    </li>
                    <li>
                      <a href="#skills">
                        <h1>Skills</h1>
                      </a>
                    </li>
                    <li>
                      <a href="#blog">
                        <h1>Blog</h1>
                      </a>
                    </li>
                  </ul>
                  :
                  null
                }
              </>
            )
            :
            <ul className="menu">
              <li>
                <a href="#">
                  Home
                </a>
              </li>
              <li>
                <a href="#work">
                  Work
                </a>
              </li>
              <li>
                <a href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a href="#blog">
                  Blog
                </a>
              </li>
            </ul>
        }
      </nav>
    </header>
  )
}

export default Index;
