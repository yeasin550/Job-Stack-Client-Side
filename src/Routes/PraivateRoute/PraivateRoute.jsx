import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const PraivateRoute = ({ children }) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading){
        return <div className='flex w-56 mx-auto justify-center items-center flex-col mt-48 mb-48'>
                <span className="loading loading-infinity  text-center text-blue-700 w-2/4"></span>
                <p className='text-2xl uppercase '>Please LOgin First</p>
              </div>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PraivateRoute;