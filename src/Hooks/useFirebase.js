import { useEffect, useState } from "react"
import { GoogleAuthProvider, getAuth, signOut, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication()
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error,setError] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()

    const signInUsingGoogle = () =>{
        signInWithPopup(auth,googleProvider)
        .then(result => {
            console.log(result.user.email)
            setUser(result.user);
        })
        .catch(error => {
            setError(error.message)
        })

    }
    useEffect( () =>{
        
        onAuthStateChanged(auth,user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            
        });
    
    },[])

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