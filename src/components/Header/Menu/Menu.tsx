import { FC } from 'react';

import './Menu.scss';
import Navigation from '../Navigation/Navigation';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

const Menu: FC<MenuProps> = ({ isOpen, onClose, className }) => {
  return (
    <div className={`menu ${isOpen ? 'open' : ''} ${className}`}>
      <div className='menu__overlay' onClick={onClose}></div>
      <div className='menu__content'>
        <Navigation />
      </div>
    </div>
  );
};

export default Menu;
