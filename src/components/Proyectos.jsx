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

        <motion.div class="card" onClick={handleClick}  whileHover={{scale: 1.2}}>
            <motion.div className='borde'> 
              <img src="https://i.imgur.com/dXnhkEP.png" class="card-img-top" alt="card-group-image"/>
              <motion.div className={clicked ? '' : 'oculto'} >
              <div class="card-body">
                <h5 class="card-title">Portfolio</h5>
                <p class="card-text">This proyect it's based on ReactJS, with framer-motion for the animations, and Boostrap for some components. Is a first version, and i've things to implement.
</p>
              </div>
              <div class="card-footer">
                <a href="http://laolla-generador.netlify.app/" target="_blank" rel="noopener noreferrer">GO TO</a>
              </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div class="card"  onClick={handleClick} whileHover={{scale: 1.2}}>
            <div className='borde'>
              <img src="https://i.imgur.com/XompTW6.png" class="card-img-top" alt="card-group-image"/>
              <motion.div className={clicked ? '' : 'oculto'} >
              <div class="card-body">
                <h5 class="card-title">Price chart generator</h5>
                <p class="card-text">The project was created in React, with the use of Hoocks, I used boostrap for base styles, and also the html2canvas library, to be able to download the graph divider as png. Price graph generator for a business, where the values are entered in an input and they are updated in real time in the graph, to later download both graphs, or separately</p>
              </div>
              <div class="card-footer">
                <a href="http://laolla-generador.netlify.app/" target="_blank" rel="noopener noreferrer">GO TO</a>
              </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div class="card" onClick={handleClick} whileHover={{scale: 1.2}}>
            <div className='borde'>
              <img src="https://i.imgur.com/dXnhkEP.png" class="card-img-top" alt="card-group-image"/>
              <motion.div className={clicked ? '' : 'oculto'} >
              <div class="card-body">
                <h5 class="card-title">Portfolio</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusantium neque reprehenderit corrupti ab! Consequuntur, inventore dicta quaerat mollitia blanditiis, laudantium nostrum ullam corporis deserunt quis quod iste et beatae!</p>
              </div>
              <div class="card-footer">
                <a href="http://laolla-generador.netlify.app/" target="_blank" rel="noopener noreferrer">GO TO</a>
              </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div class="card" onClick={handleClick} whileHover={{scale: 1.2}}>
            <div className='borde'>
              <img src="https://i.imgur.com/dXnhkEP.png" class="card-img-top" alt="card-group-image"/>
              <motion.div className={clicked ? '' : 'oculto'} >
              <div class="card-body">
                <h5 class="card-title">Portfolio</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusantium neque reprehenderit corrupti ab! Consequuntur, inventore dicta quaerat mollitia blanditiis, laudantium nostrum ullam corporis deserunt quis quod iste et beatae!</p>
              </div>
              <div class="card-footer">
                <a href="http://laolla-generador.netlify.app/" target="_blank" rel="noopener noreferrer">GO TO</a>
              </div>
              </motion.div>
            </div>
          </motion.div>
          </div>
    </>
  )
}

export default Proyectos