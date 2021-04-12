import React from 'react'
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

import css from './NavigationMenu.module.css';
import { MenuItemProp } from './NavigationType';

interface NavigationMenuProp {
  items: MenuItemProp[]
}

const NavigationMenu: React.FC<NavigationMenuProp> = ({ items }) => {
  const [isOpen, toggleOpen] = useCycle<boolean>(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      className={css.navMenu}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className={css.background} variants={sidebar} />
      <Navigation items={items} toggle={() => toggleOpen()} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
}

// Framer motion
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      /* delay: 0.5, */
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};
export default NavigationMenu
