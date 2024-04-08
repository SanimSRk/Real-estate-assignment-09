import { Outlet } from 'react-router-dom';
import Navers from '../Compment/Naver/Navers';
import Footer from '../Compment/Footer';

const MainLayout = () => {
  return (
    <div>
      <div className="h-16">
        <Navers></Navers>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
