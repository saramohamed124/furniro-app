import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Navbar/Navbar";
import {
  RecoilRoot
} from 'recoil';

export default function App() {
  return (
    <div className="App">
      <RecoilRoot>
      <Navbar />
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        </Routes>
        </RecoilRoot>
    </div>
  );
}
