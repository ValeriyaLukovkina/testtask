import { FC } from 'react';

import './Navigation.scss';

interface NavigationProps {
  className?: string;
}

const Navigation: FC<NavigationProps> = ({ className }) => {
  return (
    <nav className={`nav ${className}`}>
      <ul className='nav__list'>
        <li className='nav__list-item'>
          <a href='#' className='nav__list-link'>
            Home
          </a>
        </li>
        <li className='nav__list-item'>
          <a href='#' className='nav__list-link'>
            Products
          </a>
        </li>
        <li className='nav__list-item'>
          <a href='#' className='nav__list-icon' aria-label='Basket'></a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
