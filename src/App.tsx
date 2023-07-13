import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/homepage/Home";
import About from "./pages/about/About";
import Trending from "./pages/trending/Trending";
import Discounts from "./pages/discounts/Discounts";
import Results from "./pages/results/Results";
import Navbar from "./pages/navbar/Navbar";
import Footer from "./pages/Footer";
import "./app.css";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/discounts" element={<Discounts />} />
        <Route path="/results" element={<Results />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
