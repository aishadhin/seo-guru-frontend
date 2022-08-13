import { Routes, Route} from "react-router-dom";
import './App.css';
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Ecommerceseoservice from "./Pages/Ecommerceseoservice/Ecommerceseoservice";
import Home from "./Pages/Home/Home";
import LInkBuilding from "./Pages/LinkBuilding/LInkBuilding";
import Footer from "./Pages/Shared/Navbar/Footer";
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="linkbuilding" element={<LInkBuilding />} />
        <Route path="ecommerceseoservice" element={<Ecommerceseoservice />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
