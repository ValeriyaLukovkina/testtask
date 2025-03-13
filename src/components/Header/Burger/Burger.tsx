import { useCallback, useState } from 'react';

import Menu from '../Menu/Menu';
import './Burger.scss';

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = useCallback(() => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('no-scroll', !isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    document.body.classList.remove('no-scroll');
  }, []);

  return (
    <div className='burger'>
      <button className={`burger__icon ${isOpen ? 'active' : ''}`} onClick={handleToggle}></button>

      <Menu className='burger__menu' onClose={handleClose} isOpen={isOpen} />
    </div>
  );
};

export default Burger;
