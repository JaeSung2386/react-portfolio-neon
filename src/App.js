import {
  faBars,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './assets/header.css';
import './assets/app.css';
import './assets/home.css';
import './assets/footer.css';

import Profile from './assets/profile.JPG';

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
      <div className="home">
        <div className="home-intro">
          <div className="home-description">
            <h1>안녕하세요.</h1>
            <h1>FrontEnd 개발자 강재성입니다.</h1>
            <h1>네온 스타일을 곁들인 개인 포트폴리오 사이트입니다.</h1>
          </div>

          <div className="box">
            <div className="home-profile">
              <img
                src={Profile}
                className="img-profile"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Home End */}

      {/* About Start */}
      <div className="home">
        <div className="home-intro">
          <div className="box">
            <h1>안녕하세요.</h1>
            <h1>FrontEnd 개발자 강재성입니다.</h1>
            <h2>네온 스타일을 곁들인 개인 포트폴리오 사이트입니다.</h2>
          </div>

          <div className="box">
            <div className="home-profile">
              <img
                src={Profile}
                className="img-profile"
              />
            </div>
          </div>
        </div>
      </div>
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
            src={Profile}
            className="img-profile"
          />
        </div>
      </div>

      {/* Work End */}

      {/* Skils Start */}

      {/* Skils End */}

      {/* Footer Start */}
      <footer className='footer'>
        <div className="social-icon">
          <ul></ul>
        </div>
        <div className="copyright">
          <h3>Copyright © 2024</h3>
          <h3>Developed by Kang Jae Seong</h3>
        </div>
        <div className="contact">
          <h3>
            <a href="mailto:wotjd2386@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
              &nbsp;
              wotjd2386@gmail.com
            </a>
          </h3>
        </div>
      </footer>
      {/* Footer End */}
    </div>
  );
}

export default App;
