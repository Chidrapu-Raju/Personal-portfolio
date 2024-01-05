import './App.css';
import { Home } from './Components/Home/Home';
import { Header } from './Components/Common/Header';
import { Footer } from './Components/Common/Footer';
import {  Route, Routes } from 'react-router-dom';
import { About } from './Components/About/About';
import { Projects } from './Components/Projects/Projects';
import { Contact } from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
