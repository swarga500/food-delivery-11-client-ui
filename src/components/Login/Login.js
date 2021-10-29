import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const {signInUsingGoogle} = useFirebase()
    return (
        <div className="" id="login">
            <h1>Login</h1>
            <button onClick={signInUsingGoogle} className="btn btn-warning mt-2">Google signIn</button>
        </div>
    );
};

export default Login;