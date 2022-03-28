import React from 'react'
import "./Welcome.css"
import {motion} from 'framer-motion'

const Welcome = () => {
  return (
    <div id='welcome' className='name'>
      <div>
          <motion.h1 animate={{scale: 2,x: [0, 100, 0]
           }}
            transition={{duration: 0.7}}>IGNACIO <br /><span>HAFFNER</span></motion.h1>
          <motion.h3 animate={{scale: 2,x: [0, 110, 0]}} transition={{duration: 0.7}}>FRONT-END <br /><span>DEVELOPER</span></motion.h3>
      </div>

    </div>
  )
}

export default Welcome