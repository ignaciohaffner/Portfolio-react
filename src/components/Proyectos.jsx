import React, {useState} from 'react'
import "./Proyectos.css"
import {motion} from "framer-motion"

const Proyectos = () => {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }

  return (
    <>
    {/* border: "2px solid red" */}

        <h3 className='titulo' id="projects">PROJECTS</h3>

        <div class="card-group" >

        <motion.div class="card" onClick={handleClick} whileHover={{scale: 1.2}}>
            <motion.div className='borde'> 
              <img src="https://media.discordapp.net/attachments/853808492505989126/957824252810264606/unknown.png?width=1010&height=584  " class="card-img-top" alt="card-group-image"/>
              <motion.div className={clicked ? '' : 'oculto'} >
              <div class="card-body">
                <h5 class="card-title">Portfolio</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusantium neque reprehenderit corrupti ab! Consequuntur, inventore dicta quaerat mollitia blanditiis, laudantium nostrum ullam corporis deserunt quis quod iste et beatae!</p>
              </div>
              <div class="card-footer">
                <button type="button" class="btn btn-light" >IR</button>
              </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div class="card"  onClick={handleClick} whileHover={{scale: 1.2}}>
            <div className='borde'>
              <img src="https://media.discordapp.net/attachments/853808492505989126/957824252810264606/unknown.png?width=1010&height=584  " class="card-img-top" alt="card-group-image"/>
              <motion.div className={clicked ? '' : 'oculto'} >
              <div class="card-body">
                <h5 class="card-title">Portfolio</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusantium neque reprehenderit corrupti ab! Consequuntur, inventore dicta quaerat mollitia blanditiis, laudantium nostrum ullam corporis deserunt quis quod iste et beatae!</p>
              </div>
              <div class="card-footer">
                <button type="button" class="btn btn-light" >IR</button>
              </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div class="card" onClick={handleClick} whileHover={{scale: 1.2}}>
            <div className='borde'>
              <img src="https://media.discordapp.net/attachments/853808492505989126/957824252810264606/unknown.png?width=1010&height=584  " class="card-img-top" alt="card-group-image"/>
              <motion.div className={clicked ? '' : 'oculto'} >
              <div class="card-body">
                <h5 class="card-title">Portfolio</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusantium neque reprehenderit corrupti ab! Consequuntur, inventore dicta quaerat mollitia blanditiis, laudantium nostrum ullam corporis deserunt quis quod iste et beatae!</p>
              </div>
              <div class="card-footer">
                <button type="button" class="btn btn-light" >IR</button>
              </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div class="card" onClick={handleClick} whileHover={{scale: 1.2}}>
            <div className='borde'>
              <img src="https://media.discordapp.net/attachments/853808492505989126/957824252810264606/unknown.png?width=1010&height=584  " class="card-img-top" alt="card-group-image"/>
              <motion.div className={clicked ? '' : 'oculto'} >
              <div class="card-body">
                <h5 class="card-title">Portfolio</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusantium neque reprehenderit corrupti ab! Consequuntur, inventore dicta quaerat mollitia blanditiis, laudantium nostrum ullam corporis deserunt quis quod iste et beatae!</p>
              </div>
              <div class="card-footer">
                <button type="button" class="btn btn-light" >IR</button>
              </div>
              </motion.div>
            </div>
          </motion.div>
          </div>
    </>
  )
}

export default Proyectos