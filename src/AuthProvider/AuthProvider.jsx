import { createUserWithEmailAndPassword } from 'firebase/auth';
import { createContext } from 'react';
import auth from '../Firebase/firebaseAuth.init';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const creatAuccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const authInfo = {};
  return (
    <AuthContext.Provider value={authInfo}>{children} </AuthContext.Provider>
  );
};

export default AuthProvider;
