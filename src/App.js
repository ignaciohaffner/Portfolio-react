import React from 'react';
import "./App.css"
import Contact from './components/Contact';
import Navegador from './components/Navegador';
// import Navbar from './components/Navbar';
import Proyectos from './components/Proyectos';
import Tecnologias from './components/Tecnologias';
import Welcome from './components/Welcome';

function App() {
  return(
    <>
        {/* <div className='bg'></div> */}
        
        {/* <Navbar/> */}
        <Navegador/>
        <Welcome/>
        <Tecnologias/>
        <Proyectos/>
        <Contact/>
        

    </>
  )

}

export default App;
