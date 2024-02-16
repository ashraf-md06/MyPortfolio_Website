import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/home";
import About from "./containers/about";
import Skills from "./containers/skills";
import Contact from "./containers/contact";
import Resume from "./containers/resume";
import Portfolio from "./containers/portfolio";
import Navbar from "./components/navBar";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

function App() {
  // const handleInit = async (main) => {
  //   await loadFull(main);
  // };
  return (
    <div className="App">
      {/* {Particle js} */}
      {/* <Particles id="particle" init={handleInit} /> */}
      {/* {navBAr} */}
      <Navbar />
      {/* {main page container} */}
      <div className="App_main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/about" element={<About />} />
          <Route index path="/resume" element={<Resume />} />
          <Route index path="/skills" element={<Skills />} />
          <Route index path="/portfolio" element={<Portfolio />} />
          <Route index path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
