import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './component/Navbar';
import Footer from './component/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
function App() {
  return (
    <>

      <Navbar />


      <Routes> 
         <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;