import './assets/styles/header.css';
import './assets/styles/app.css';
import './assets/styles/footer.css';
import './assets/styles/text.css';

import TopScrollBar from "./components/TopScrollBar";
import Header from './components/Header';
import Home from './components/Home';
import Work from './components/Work';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Line from './components/Line';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <TopScrollBar />
      {/* Header Start */}
      <Header />
      {/* Header End */}

      {/* Home Start */}
      <div className="container">
        <Home />
      </div>
      {/* Home End */}

      <div className="container">
        <Line />
      </div>

      {/* About Start */}
      <div className="container">
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
      </div>
      {/* About End */}

      <div className="container">
        <Line />
      </div>

      {/* Work Start */}
      <div className="container">
        <Work />
      </div>
      {/* Work End */}

      <div className="container">
        <Line />
      </div>

      {/* Skils Start */}
      <div className="container">
        <Skills />
      </div>
      {/* Skils End */}

      <div className="container">
        <Line />
      </div>

      {/* Blog Start */}
      <div className="container">
        <Blog />
      </div>
      {/* Blog End */}

      {/* Footer Start */}
      < Footer />
      {/* Footer End */}
    </div>
  );
}

export default App;
