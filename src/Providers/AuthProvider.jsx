import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import useIsAdmin from "../hooks/useIsAdmin";
import uesIsInstructor from "../hooks/uesIsInstructor";
import useIsStudent from "../hooks/useIsStudent";

export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const gitHubProvider = new GithubAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const SignUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    } 
    const UpdateProfile = (user, name, photo) => {
        updateProfile(user, {
            displayName: name, photoURL: photo,
        })
    }
    const SignInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const SignInWithGitHub = () => {
        setLoading(true)
        return signInWithPopup(auth, gitHubProvider)
    }
    const SignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const SignOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            setUser(currentUser);
            if(currentUser){
                axios.post('https://talk-trek-server.vercel.app/jwt', {email : currentUser.email})
                .then(result => {
                    localStorage.setItem("TalkTrekToken", result.data.token)
                    setLoading(false)
                })
            }else{
                localStorage.removeItem("TalkTrekToken")
            }
        })
        return () => {
            return unsubscribe;
        }
    }, [])
    
    const authInfo = {
        user,
        loading,
        UpdateProfile,
        SignInWithGoogle,
        SignInWithGitHub,
        SignUp,
        SignIn,
        SignOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;