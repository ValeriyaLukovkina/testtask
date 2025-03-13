import Button from 'src/UI/Button/Button';
import './Banner.scss';

const Banner = () => {
  return (
    <section className='banner'>
      <div className='banner__content'>
        <h1 className='banner__title'>
          Discover the vast expanses of <span className='banner__title-highlight'>space</span>
        </h1>
        <p className='banner__subtitle'>
          Where the possibilities are <span className='banner__subtitle-highlight'>endless!</span>
        </p>
        <Button text='Learn more' view='default' />
      </div>
    </section>
  );
};

export default Banner;
