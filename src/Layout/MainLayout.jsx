import { Outlet } from 'react-router-dom';
import Navers from '../Compment/Naver/Navers';

const MainLayout = () => {
  return (
    <div>
      <Navers></Navers>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
