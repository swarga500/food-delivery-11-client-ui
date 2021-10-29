import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup,signOut, GoogleAuthProvider,onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication()
const useFirebase = () => {
    const [user,setUser] =useState({});
    const [loading, setIsLoading] = useState(true)

    const auth = getAuth();



    const signInUsingGoogle = () =>{
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user)
        })
        .finally(() => setIsLoading(false))

    }
    useEffect( () =>{
        setIsLoading(true)
        onAuthStateChanged(auth,user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        });
    
    },[])
    const logOut = () =>{
        setIsLoading(true)
        signOut(auth)
        .then(()=>{})
        .finally(() => setIsLoading(false))
    }
    return {
        logOut,
        signInUsingGoogle,
        user,
        loading
    }
};

export default useFirebase;