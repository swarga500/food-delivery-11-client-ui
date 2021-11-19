import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';



const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const {signInUsingGoogle} = useAuth()
    return (
        <div className="" id="login">
            <h1>Login</h1>
            <button onClick={()=>signInUsingGoogle(location,history)} className="btn btn-warning mt-2">Google signIn</button>
        </div>
    );
};

export default Login;