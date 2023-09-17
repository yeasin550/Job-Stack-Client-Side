import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
  GithubAuthProvider,
} from "firebase/auth";
import axios from "axios";

//context api create
export const AuthContext = createContext(null);
const auth = getAuth(app);

// AuthProvider
const AuthProvider = ({ children }) => {
  //login user state
  const [user, setUser] = useState(null);
  // loding state
  const [loading, setLoading] = useState(true);
  // google provider & facebook provider
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  // user create function firebase
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //sign in function website
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //google sign in function
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // reset password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  // github sing in funtion
  const gitHubSighIn = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };

  //user logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // user update profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //user login checke and set current user setuser state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);

      // get and set token
      if (currentUser) {
        axios
          .post("https://jobstack-backend-teal.vercel.app/jwt", {
            email: currentUser?.email,
          })
          .then((data) => {
            console.log(data.data.token);
            localStorage.setItem("access-token", data.data.token);
          });
      } else {
        localStorage.removeItem("access-token");
      }
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    logOut,
    updateUserProfile,
    gitHubSighIn,
    resetPassword,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
