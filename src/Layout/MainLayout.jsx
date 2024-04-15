import { Outlet } from 'react-router-dom';
import Navers from '../Compment/Naver/Navers';
import Footer from '../Compment/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  return (
    <div className="">
      <div className="h-16">
        <Navers></Navers>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>

      <ToastContainer className={'rounded-lg'} />
    </div>
  );
};

export default MainLayout;
