import './Information.scss';

const Information = () => {
  return (
    <div className='information'>
      <h2 className='information__title'>Embark on a space journey</h2>
      <input type='checkbox' id='toggle' className='information__checkbox' />
      <div className='information__content'>
        <p className='information__text'>
          Travelling into space is one of the most exciting and unforgettable adventures that can
          change your life forever. And if you have ever dreamed of exploring stars, planets and
          galaxies, then our company is ready to help you realize this dream. We offer a unique
          experience that will allow you to go on a space journey and see all the secrets of the
          universe. We guarantee that every moment in space will be filled with incredible
          impressions, excitement and new discoveries. Our team of professionals takes care of your
          safety and comfort so that you can fully enjoy your adventure in space. We offer various
          options for space excursions.
        </p>
        <p className='information__extra-text'>
          Travelling into space is one of the most exciting and unforgettable adventures that can
          change your life forever. And if you have ever dreamed of exploring stars, planets and
          galaxies, then our company is ready to help you realize this dream. We offer a unique
          experience that will allow you to go on a space journey and see all the secrets of the
          universe. We guarantee that every moment in space will be filled with incredible
          impressions, excitement and new discoveries. Our team of professionals takes care of your
          safety and comfort so that you can fully enjoy your adventure in space. We offer various
          options for space excursions.
        </p>
      </div>
      <label htmlFor='toggle' className='information__more' aria-controls='extra-text'></label>
    </div>
  );
};

export default Information;
