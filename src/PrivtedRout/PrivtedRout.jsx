import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useLocation, Navigate } from 'react-router-dom';
const PrivtedRout = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  if (!user) {
    return <Navigate to={'/login'} state={location?.pathname}></Navigate>;
  }
  return <div>{children}</div>;
};

export default PrivtedRout;
