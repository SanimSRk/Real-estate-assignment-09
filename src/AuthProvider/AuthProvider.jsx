import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebaseAuth.init';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loding, setLodin] = useState(true);

  const creatAuccount = (email, password) => {
    setLodin(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const profileUpted = (fullName, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: fullName,
      photoURL: photo,
    });
  };

  const LoginUsers = (email, password) => {
    setLodin(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const LogOutUser = () => {
    setUser(null);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubricbe = onAuthStateChanged(auth, currentUser => {
      if (currentUser) {
        setUser(currentUser);
        setLodin(false);
      } else {
        return () => {
          unsubricbe();
        };
      }
    });
  }, []);
  const authInfo = {
    profileUpted,
    loding,
    user,
    creatAuccount,
    LoginUsers,
    LogOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children} </AuthContext.Provider>
  );
};

export default AuthProvider;
