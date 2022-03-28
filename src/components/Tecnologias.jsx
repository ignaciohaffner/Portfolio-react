import React from 'react'
import "./Tecnologias.css"
import {motion} from 'framer-motion'

const Tecnologias = () => {
  return (
    <>
        {/* <motion.div  className="container">  
                <motion.i 
                whileHover={{ scale: 1.5, color: "#e54c21" }}
                whileTap={{ scale: 0.9, color: "#e54c21" }}
                className="fa-brands fa-html5"></motion.i>
                <motion.i 
                whileHover={{ scale: 1.5, color: "#0096dc" }}
                whileTap={{ scale: 0.9, color: "#0096dc" }} 
                className="fa-brands fa-css3-alt"></motion.i>
                <motion.i 
                whileHover={{ scale: 1.5, color: "#f7e018" }}
                whileTap={{ scale: 0.9, color: "#f7e018" }} 
                className="fa-brands fa-js-square"></motion.i>
                <motion.i 
                whileHover={{ scale: 1.5, color: "#61dbfb"}}
                whileTap={{ scale: 0.9, color: "#61dbfb" }} 
                className="fa-brands fa-react"></motion.i>
        </motion.div> */}

          <div id='sobremi' className="flex-container">
            <div className="flex-items">
              <img className="foto" src="https://cdn.discordapp.com/attachments/862320756302413824/957755865803390986/unknown.png" alt="" />
            </div>
            <div className="flex-items">
              <div className='sobremi'>
                  <h3>About me</h3>
                  <p>I'm a systems engineering student, looking for a job to continue my studies, I'm learning Front-End development, and every day I keep looking to improve my code skills as well as interpersonal skills. I am committed and seek to improve in everything I do.</p>
              </div>
                <motion.div  className="container">  
                      <motion.i 
                      whileHover={{ scale: 1.5, color: "#e54c21" }}
                      whileTap={{ scale: 1.4, color: "#e54c21" }}
                      className="fa-brands fa-html5"></motion.i>
                      <motion.i 
                      whileHover={{ scale: 1.5, color: "#0096dc" }}
                      whileTap={{ scale: 1.4, color: "#0096dc" }} 
                      className="fa-brands fa-css3-alt"></motion.i>
                      <motion.i 
                      whileHover={{ scale: 1.5, color: "#f7e018" }}
                      whileTap={{ scale: 1.4, color: "#f7e018" }} 
                      className="fa-brands fa-js-square"></motion.i>
                      <motion.i 
                      whileHover={{ scale: 1.5, color: "#61dbfb"}}
                      whileTap={{ scale: 1.4, color: "#61dbfb" }} 
                      className="fa-brands fa-react"></motion.i>
                  </motion.div>
            </div>
          </div>
    </>
  )
}

export default Tecnologias