import { useEffect, useState } from "react"
import { GoogleAuthProvider, getAuth, signOut, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication()
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error,setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()

    const signInUsingGoogle = (location, history) =>{
        setIsLoading(true)
        signInWithPopup(auth,googleProvider)
        .then(result => {
            console.log(result.user.email)
            setUser(result.user);
            const destination = location?.state?.from || '/';
                history.replace(destination);
        })
        .catch(error => {
            setError(error.message)
        }).finally(() => setIsLoading(false));

    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
               
            } else {
                setUser({})
            }
            setIsLoading(false)
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
        isLoading,
        signInUsingGoogle
    }
}
export default useFirebase;