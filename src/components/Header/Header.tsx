import IconLogo from '../../assets/icons/IconLogo';
import Navigation from './Navigation/Navigation';
import BurgerMenu from './Burger/Burger';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__logo'>
          <IconLogo className='header__logo-icon' />
        </div>

        <BurgerMenu />

        <Navigation className='header__navigation' />
      </div>
    </header>
  );
};

export default Header;
