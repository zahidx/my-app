
import React from 'react';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Resume from './pages/Resume';
import Error from './pages/Error';
import Signin from './pages/Signin';


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
      <Route path="/resume" element={<Resume />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="*" element={<Error />} />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
