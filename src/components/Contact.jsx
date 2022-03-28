import React from 'react'
import "./Contact.css"
import {motion} from "framer-motion"

const Contact = () => {
  return (

    <>
        <div className='contacto'>
        <h3 className='titulo-contact'>CONTACT</h3>
        <motion.div  id='contact' className="containeer">  
                      <a className='links' href="https://www.linkedin.com/in/ignacio-haffner-3965b017a/" target="_blank">
                      <motion.i 
                      whileHover={{ scale: 1.5}}
                      whileTap={{ scale: 1.4}}
                      className="fa-brands fa-linkedin"></motion.i>
                      </a>
                      <a className='links' href="mailto:ignaciohaffner@gmail.com" target="_blank">
                      <motion.i 
                      whileHover={{ scale: 1.5}}
                      whileTap={{ scale: 1.4}} 
                      className="fa-solid fa-envelope"></motion.i>
                      </a>
                      <a className='links' href="https://github.com/ignaciohaffner" target="_blank"><motion.i 
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 1.4}} 
                      className="fa-brands fa-github"></motion.i></a>
        </motion.div>
        </div>           
    </>
  )
}

export default Contact