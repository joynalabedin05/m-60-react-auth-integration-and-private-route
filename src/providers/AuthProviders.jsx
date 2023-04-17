import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null);
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';



const auth = getAuth(app);
const AuthProviders = ({children}) => { 

    const [user, setUser] = useState(null);
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
       return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(()=>{
        // observe auth state change
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('auth stage change', currentUser);
            setUser(currentUser)
        });
            
        return ()=>{
            unsubscribe();
        }
    },[])
    
    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;