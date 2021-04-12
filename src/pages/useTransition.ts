export const transition = {
     staggerChildren: 0.15
}

export const pagevariants = {
     exit: { transition: { ...transition, staggerDirection: -1 } },
     enter: { transition: { ...transition, staggerDirection: 1 } }
}


export const item = {
     enter: {
          opacity: 1,
     },
     exit: {
          opacity: 0,
     }
}