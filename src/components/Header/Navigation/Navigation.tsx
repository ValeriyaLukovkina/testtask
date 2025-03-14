import { FC, MouseEvent, useCallback, useState } from 'react';

import './Navigation.scss';
import ErrorModal from 'src/components/ErrorModal/ErrorModal';

interface NavigationProps {
  className?: string;
}

const Navigation: FC<NavigationProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      setIsOpen(true);

      document.body.classList.add('no-scroll');
    },
    [],
  );

  const handleClose = useCallback(() => {
    setIsOpen(false);

    document.body.classList.remove('no-scroll');
  }, []);

  return (
    <>
      <nav className={`nav ${className}`}>
        <ul className='nav__list'>
          <li className='nav__list-item'>
            <a href='#' className='nav__list-link' onClick={handleOpen}>
              Home
            </a>
          </li>
          <li className='nav__list-item'>
            <a href='#' className='nav__list-link' onClick={handleOpen}>
              Products
            </a>
          </li>
          <li className='nav__list-item'>
            <a href='#' className='nav__list-icon' aria-label='Basket' onClick={handleOpen}></a>
          </li>
        </ul>
      </nav>
      {isOpen && <ErrorModal onClose={handleClose} />}
    </>
  );
};

export default Navigation;
