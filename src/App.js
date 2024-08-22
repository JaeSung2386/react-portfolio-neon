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
    <div className="app" style={{
      overflowY: 'scroll'
    }}>
      <TopScrollBar />
      {/* Header Start */}
      <Header />
      {/* Header End */}

      {/* Home Start */}
      <div className="container">
        <Home />
        <Line />
        <Work />
        <Line />
        <Skills />
        <Line />
        <Blog />
      </div>
      {/* Home End */}

      {/* Footer Start */}
      < Footer />
      {/* Footer End */}
    </div>
  );
}

export default App;
