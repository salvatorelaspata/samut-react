import React from 'react'
import { motion } from 'framer-motion'
interface AgendaProps {

}

const style: React.CSSProperties = { position: "absolute", top: "50%", left: "50%", marginLeft: "-220px" };

const Agenda: React.FC<AgendaProps> = (props) => {
     return (

          <motion.div animate="enter" initial="exit" exit="exit">
               <h1 style={style}>
                    Aganda - coming soon...
               </h1>
          </motion.div>
     )
}



export default Agenda
