import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebaseAuth.init';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleProvide = new GoogleAuthProvider();
  const gitHubProvide = new GithubAuthProvider();
  const [loding, setLoding] = useState(true);
  const creatAuccount = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const profileUpted = (fullName, photo) => {
    return updateProfile(auth?.currentUser, {
      displayName: fullName,
      photoURL: photo,
    });
  };

  const LoginUsers = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const LogOutUser = () => {
    setUser(null);
    setLoding(false);
    signOut(auth);
  };

  const googleSinig = () => {
    setLoding(true);
    return signInWithPopup(auth, googleProvide);
  };
  const gitHubSinig = () => {
    setLoding(true);
    return signInWithPopup(auth, gitHubProvide);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      if (currentUser) {
        setUser(currentUser);
        setLoding(false);
      } else {
        setLoding(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    profileUpted,
    loding,
    user,
    creatAuccount,
    LoginUsers,
    LogOutUser,
    googleSinig,
    gitHubSinig,
    setUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children} </AuthContext.Provider>
  );
};

export default AuthProvider;
