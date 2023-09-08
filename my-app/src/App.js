
import React from 'react';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Pricing from './pages/Pricing';
import Error from './pages/Error';
import Signin from './pages/Signin';
import Footer from './pages/Footer';


import './App.css';



import Navbar from './components/Navbar';


function App() {
  return (
    
    <BrowserRouter>
     <Navbar />

   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="*" element={<Error />} />
      <Route path="/footer" element={<Footer />} />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
