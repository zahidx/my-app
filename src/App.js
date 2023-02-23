import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Blogs from './pages/blogs';
import Contact from './pages/contact';
import Error from './pages/error';
import Navbar from './component/navbar';
import Preservey from './pages/preservey';
import About from './pages/about';
import Message from './pages/message';
import Postservey from './pages/postservey';




function App() {
  return (

    <BrowserRouter>
    <Navbar/>
   
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/blogs" element={<Blogs/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="*" element={<Error/>} />
      <Route path="/preservey" element={<Preservey/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/message" element={<Message/>} />
      <Route path="/postservey" element={<Postservey/>} />



      
    </Routes>


    </BrowserRouter>

  );
}

export default App;

