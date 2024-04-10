import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useLocation, Navigate } from 'react-router-dom';
const PrivtedRout = ({ children }) => {
  const { user, loding } = useContext(AuthContext);
  const location = useLocation();
  console.log(loding);
  if (loding) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  if (!user) {
    return <Navigate to={'/login'} state={location?.pathname}></Navigate>;
  }

  return <div>{children}</div>;
};

export default PrivtedRout;
