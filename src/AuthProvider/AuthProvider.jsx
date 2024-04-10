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
  const [loding, setLodin] = useState(true);
  const googleProvide = new GoogleAuthProvider();
  const gitHubProvide = new GithubAuthProvider();

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

  const googleSinig = () => {
    setLodin(true);
    return signInWithPopup(auth, googleProvide);
  };
  const gitHubSinig = () => {
    setLodin(true);
    return signInWithPopup(auth, gitHubProvide);
  };

  useEffect(() => {
    const unsubricbe = onAuthStateChanged(auth, currentUser => {
      if (currentUser) {
        setUser(currentUser);
        setLodin(false);
      }

      return () => {
        unsubricbe();
      };
    });
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
  };
  return (
    <AuthContext.Provider value={authInfo}>{children} </AuthContext.Provider>
  );
};

export default AuthProvider;
