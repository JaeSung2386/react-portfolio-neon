import {
  faBars,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faWordpressSimple
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './assets/styles/header.css';
import './assets/styles/app.css';
import './assets/styles/home.css';
import './assets/styles/footer.css';
import './assets/styles/line.css';
import './assets/styles/text.css';

import Profile from './assets/imgs/profile.jpg';
import Home from './components/Home';

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
      {/* https://codepen.io/nickpettit/pen/nOOdme */}
      <div className="line">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
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
      <footer>
        <div className="footer">
          <div className="copyright">
            <h3>Developed by Kang Jae Seong</h3>
          </div>
          <div className="copyright">
            <h3>Copyright © 2024</h3>
          </div>
          <div className="footer-social-icons">
            <ul className="social-icons">
              <li>
                <a href="mailto:wotjd2386@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
              <li>
                <a href="https://github.com/JaeSung2386" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a href="https://webveloper.dev/" target="_blank">
                  <FontAwesomeIcon icon={faWordpressSimple} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* Footer End */}
    </div>
  );
}

export default App;
