import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home/Home';
import { Header } from './Components/Common/Header';
import { Footer } from './Components/Common/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './Components/About/About';
import { Projects } from './Components/Projects/Projects';
import { Contact } from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      
        <Header />
        
        <Footer />
    </div>
  );
}

export default App;
