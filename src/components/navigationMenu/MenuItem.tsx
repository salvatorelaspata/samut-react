import * as React from "react";
import { motion } from "framer-motion";
import { MenuItemProp } from './NavigationType';
import { Link } from 'react-router-dom';
import css from './NavigationMenu.module.css'

const handleNavigation: (event: React.KeyboardEvent<HTMLDivElement>) => void = () => {
     debugger;
};

export const MenuItem: React.FC<MenuItemProp> = ({ id, text, color, path, toggle }) => {
     const style = { border: `2px solid ${color}` };

     return (
          <Link key={id} to={path} >
               <motion.li
                    onTap={toggle}
                    variants={variants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
               >
                    <div className={css['icon-placeholder']} style={style} />
                    <div className={css['text-placeholder']} style={style} onKeyPress={handleNavigation}>
                         {text.toString()}
                    </div>
               </motion.li>
          </Link>
     );
};

const variants = {
     open: {
          y: 0,
          display: 'flex',
          transition: {
               y: { stiffness: 1000, velocity: -100 }
          }
     },
     closed: {
          y: 50,
          display: 'none',
          transition: {
               y: { stiffness: 1000 }
          }
     }
};