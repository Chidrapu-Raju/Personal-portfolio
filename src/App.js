import './App.css';
import { Home } from './Components/Home/Home';
import { Header } from './Components/Common/Header';
import { Footer } from './Components/Common/Footer';
import {  Route, Routes } from 'react-router-dom';
import { About } from './Components/About/About';
import { Projects } from './Components/Projects/Projects';
import { Contact } from './Components/Contact/Contact';
import { ProjectContext } from './Contexts/useProject';
import { useState } from 'react';

function App() {

  const [projects,setProjects] = useState([]);

  return (
    <div className="App">
      <ProjectContext.Provider value={{projects: projects,setProjects: setProjects}}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
        </ProjectContext.Provider>
    </div>
  );
}

export default App;
