import './assets/styles/header.css';
import './assets/styles/app.css';
import './assets/styles/footer.css';
import './assets/styles/text.css';

import TopScrollBar from "./components/TopScrollBar";
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
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
