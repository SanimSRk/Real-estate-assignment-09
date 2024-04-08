import { Outlet } from 'react-router-dom';
import Navers from '../Compment/Naver/Navers';

const MainLayout = () => {
  return (
    <div>
      <Navers></Navers>
      <h2>Main section</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
