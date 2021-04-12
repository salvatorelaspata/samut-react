import React from 'react'
import { motion } from 'framer-motion'
import css from './Home.module.css';

const Home = () => {

     return (

          <motion.div animate="enter" initial="exit" exit="exit">
               <h1 className={css.title}>
                    SAMOT <span className={css.version}>2.0</span>
               </h1>
          </motion.div>
     )
}

export default Home
