import { FC, useEffect, useState } from 'react';

import { OfferData } from '../offersData';
import images from '../images';
import Button from 'src/UI/Button/Button';
import './OfferCard.scss';

interface OfferCardProps {
  offer: OfferData;
}

const OfferCard: FC<OfferCardProps> = ({ offer }) => {
  const { image, title, description } = offer;
  const backgroundImage = `url(${images[image as keyof typeof images]})`;

  const [buttonSize, setButtonSize] = useState<'s' | 'm'>('m');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1247px)');

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setButtonSize((prev) => (e.matches ? 's' : 'm'));
    };

    setButtonSize(mediaQuery.matches ? 's' : 'm');

    mediaQuery.addEventListener('change', handleMediaChange);

    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  return (
    <div className='offerCard' style={{ '--bg-image': backgroundImage } as React.CSSProperties}>
      <div className='offerCard__content'>
        <h3 className='offerCard__title'>{title}</h3>
        <p className='offerCard__description'>{description}</p>
        <Button text='Learn more' view='light' size={buttonSize} />
      </div>
    </div>
  );
};

export default OfferCard;
