// src/App.js
import React from 'react';
import './App.css';
import About from './components/About'; // Import the About component
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <About /> 
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
