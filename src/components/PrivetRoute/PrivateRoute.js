import { Redirect, Route } from "react-router";
import useAuth from "../../Hooks/useAuth";
import useFirebase from "../../Hooks/useFirebase";




const PrivetRoute = ({ children, ...rest }) => {
    const {user} = useAuth()
   
    console.log(user?.email)
    
    return (
        <Route
        {...rest}
        render={({location}) => user.email ? children:
            <Redirect
            to={{
                pathname: "/login",
                state: {from: location}
            }}
            ></Redirect>
        }
        >
            
        </Route>
    );
};

export default PrivetRoute;