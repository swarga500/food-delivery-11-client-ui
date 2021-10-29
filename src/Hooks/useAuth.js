import { useContext } from "react";
import { AuthContext } from "../Context api/AuthProvider";


const useAuth = () =>{
    return useContext(AuthContext)
}
export default useAuth;