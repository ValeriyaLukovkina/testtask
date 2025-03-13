import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Offers from './components/Offers/Offers';
import Information from './components/Information/Information';
import Footer from './components/Footer/Footer';

import './App.scss';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <div className='section'>
          <Offers />
          <Information />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
