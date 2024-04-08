import { Outlet } from 'react-router-dom';
import Navers from '../Compment/Naver/Navers';

const MainLayout = () => {
  return (
    <div>
      <div className="h-16">
        <Navers></Navers>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
