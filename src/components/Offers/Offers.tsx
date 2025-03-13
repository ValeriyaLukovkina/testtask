import OfferCard from './OfferCard/OfferCard';
import { offers } from './offersData';
import './Offers.scss';

const Offers = () => {
  return (
    <section className='offers'>
      <h2 className='offers__title'>Offers</h2>
      <div className='offers__content'>
        {offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer}/>
        ))}
      </div>
    </section>
  );
};

export default Offers;
