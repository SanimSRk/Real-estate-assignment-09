import { useEffect } from 'react';
import Banner from '../Compment/Banner/Banner';
import CartSecion from '../Compment/Cart/CartSecion';

const Home = () => {
  useEffect(() => {
    document.title = 'HomeHaven / Home';
  }, []);
  return (
    <div>
      <Banner></Banner>
      <CartSecion></CartSecion>
    </div>
  );
};

export default Home;
