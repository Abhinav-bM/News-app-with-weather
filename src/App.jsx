import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import HeroSection from "./sections/HeroSection";
// import FeaturesSection from "./sections/FeaturesSection";

function App() {
  return (
    <Router>
      {/* <HeroSection /> */}
      {/* <FeaturesSection /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
