import React, { useState } from 'react';
import './NavigationMenu.css';
import cn from 'classnames';
import { Link } from 'react-router-dom';

interface NavigationMenuItemProps {
     id: number;
     title: string;
     icon?: string,
     path: string;
}

interface NavigationMenuProps {
     items: NavigationMenuItemProps[];
}

// https://codepen.io/suez/pen/gPRjBo
const NavigationMenu: React.FC<NavigationMenuProps & React.LiHTMLAttributes<HTMLLIElement>> = ({ items, ...rest }) => {
     const [opened, setOpened] = useState<boolean>(false);
     const [selected, setSelected] = useState<string>(window.location.pathname);

     return (
          <>
               <div className='navigation'>
                    <nav className='nav'>
                         <div className={cn('nav__cb', { open: opened })} />
                         <div className='nav__content'>
                              <ul className='nav__items'>
                                   {items.map((item) => {
                                        return (
                                             <Link key={item.id} to={item.path}>
                                                  <li className='nav__item' onClick={() => setSelected(item.path)} {...rest}>
                                                       <span className={cn('nav__item-text', { "selected": item.path.startsWith(selected) })}>
                                                            {item.title}
                                                       </span>
                                                  </li>
                                             </Link>
                                        )
                                   })}
                              </ul>
                         </div>
                         <label className='nav__btn' onClick={() => setOpened(!opened)}></label>
                    </nav>
               </div>
          </>
     );
};

export default NavigationMenu;
