import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {
    FacebookAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
    sendEmailVerification,
    sendPasswordResetEmail,
} from "firebase/auth";

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
    const facebookProvider = new FacebookAuthProvider();
    // user create function firebase
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    //sign in function website
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(
            auth,
            email,
            password,
            sendEmailVerification
        );
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
    // facebook signin function
    const facebookSighIn = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider)
    }

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
      facebookSighIn,
      resetPassword,
    };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;