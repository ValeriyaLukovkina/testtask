import { FC } from 'react';

import rocket from 'src/assets/images/rocket.png';
import './Footer.scss';

const Footer: FC = () => {
  return (
    <footer className='footer'>
      <img src={rocket} alt='rocket' className='footer__img'/>
      <div className='footer__text'>Exciting space adventure!</div>
    </footer>
  );
};

export default Footer;
