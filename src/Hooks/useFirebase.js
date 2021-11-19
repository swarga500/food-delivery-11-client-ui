import { useEffect, useState } from "react"
import { GoogleAuthProvider, getAuth, signOut, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication()
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error,setError] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()

    const signInUsingGoogle = (location, history) =>{
        signInWithPopup(auth,googleProvider)
        .then(result => {
            console.log(result.user.email)
            setUser(result.user);
            const destination = location?.state?.from || '/';
                history.replace(destination);
        })
        .catch(error => {
            setError(error.message)
        })

    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
               
            } else {
                setUser({})
            }
            
        });
        return () => unsubscribed;
    }, [auth])


    const logOut = () =>{
        
        signOut(auth)
        .then(()=>{})
        
    }
    return {
        logOut,
        user,
        error,
        signInUsingGoogle
    }
}
export default useFirebase;