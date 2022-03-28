import React from 'react'
import "./Navegador.css" 

const Navegador = () => {
  return (
    <>
        <div className='header'>
            <div className='nav'>
            <img className='logo' src="https://cdn.discordapp.com/attachments/890480858102894622/955938827980115978/logo2.png" alt="logo" />
            <ul>
                <li><a href="#welcome">Home</a></li>
                <li><a href="#sobremi">Aboutme</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            </div>
        </div>
    </>
  )
}

export default Navegador