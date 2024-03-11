import {
  faBars
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './assets/styles/header.css';
import './assets/styles/app.css';
import './assets/styles/footer.css';
import './assets/styles/text.css';

import Home from './components/Home';
import Line from './components/Line';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Header Start */}
      <header className="header">
        <nav>
          <div className="logo">
            <a href="index.html">
              <h1>Dev_guitar</h1>
            </a>
          </div>
          <div className='menu-hambuger'>
            <FontAwesomeIcon
              style={{ color: "#0ef" }}
              icon={faBars} />
          </div>
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
                Skils
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {/* Header End */}

      {/* Home Start */}
      <Home />
      {/* Home End */}

      {/* line Start */}
      <Line />
      {/* line End */}

      {/* About Start */}
      {/* About End */}

      {/* Work Start */}
      <div className="home">
        <div>
          <h1>안녕하세요.</h1>
          <h1>FrontEnd 개발자 강재성입니다.</h1>
          <h2>네온 스타일을 곁들인 개인 포트폴리오 사이트입니다.</h2>
        </div>

        <div className="home-profile">
          <img
            className="img-profile"
          />
        </div>
      </div>

      {/* Work End */}

      {/* Skils Start */}

      {/* Skils End */}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </div>
  );
}

export default App;
