import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateCurrentUser,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebaseAuth.init';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const creatAuccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const LoginUsers = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const LogOutUser = () => {
    setUser(null);
    return signOut(auth);
  };

  const profileUpted = () => {
    return updateCurrentUser((auth.currentUser, {}));
  };
  useEffect(() => {
    const unsubricbe = onAuthStateChanged(auth, currentUser => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        return () => {
          unsubricbe();
        };
      }
    });
  }, []);
  const authInfo = { user, creatAuccount, LoginUsers, LogOutUser };
  return (
    <AuthContext.Provider value={authInfo}>{children} </AuthContext.Provider>
  );
};

export default AuthProvider;
