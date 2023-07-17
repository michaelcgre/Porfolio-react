import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <div id="about-section">
        <AboutMe />
      </div>
      <div id="portfolio-section">
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
