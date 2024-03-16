import React from 'react'
import {
  faBars
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowResize } from '../../hooks/useWindowResize';

// https://codesandbox.io/p/sandbox/react-responsive-navbar-1chg6?file=%2Fsrc%2Findex.js
const Index = () => {
  const [width, height] = useWindowResize();

  return (
    <header className="header">
      <nav>
        <div className="logo">
          <a href="index.html">
            <h1>Dev_guitar</h1>
          </a>
        </div>
        {
          width < 768 ?
            <div className="menu-hambuger">
              <FontAwesomeIcon
                style={{ color: "#0ef" }}
                icon={faBars} />
            </div>
            :
            <ul className="menu">
              <li>
                <a href="#">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">
                  About
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
