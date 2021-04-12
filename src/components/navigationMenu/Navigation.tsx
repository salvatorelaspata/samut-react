import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { NavigationProp } from './NavigationType';

export const Navigation: React.FC<NavigationProp> = ({ items, toggle }) => (
     <motion.ul variants={variants}>
          {items.map(i => (
               <MenuItem key={i.id} id={i.id} text={i.text} color={i.color} path={i.path} toggle={toggle} />
          ))}
     </motion.ul>
);


const variants = {
     open: {
          transition: { staggerChildren: 0.07, delayChildren: 0.2 }
     },
     closed: {
          transition: { staggerChildren: 0.05, staggerDirection: -1 }
     }
};