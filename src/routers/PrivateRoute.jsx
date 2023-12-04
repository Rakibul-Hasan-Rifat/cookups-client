import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserAuthContext } from "../context/UserAuthProvider";

const PrivateRoute = ({ children }) => {

    const location = useLocation()
    console.log(location)

    const { user } = useContext(UserAuthContext)

    if (user) return children;

    return <Navigate to='/login' state={location.pathname} />
};

export default PrivateRoute;