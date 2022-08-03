import { Routes, Route} from "react-router-dom";
import './App.css';
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
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
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
