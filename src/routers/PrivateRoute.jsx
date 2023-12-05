import { useContext } from "react";
import { Dna } from  'react-loader-spinner'
import { Navigate, useLocation } from "react-router-dom";
import { UserAuthContext } from "../context/UserAuthProvider";

const PrivateRoute = ({ children }) => {

    const location = useLocation()
    console.log(location)

    const { user, loading } = useContext(UserAuthContext)

    if (loading) return (
        <div style={{height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Dna
                visible={true}
                height="300"
                width="300"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </div>
  )

    if (user) return children;

    return <Navigate to='/login' state={location.pathname} />
};

export default PrivateRoute;