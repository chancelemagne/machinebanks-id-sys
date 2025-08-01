import React, { useState, useEffect, use } from 'react';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from '../backend/user';

const ProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkSession = async () => {
            const loggedIn = await isLoggedIn();
            setIsAuthenticated(loggedIn);
            setIsLoading(false);
        }
        checkSession();
    }, []);

    if(isLoading) {
        return <div>Loading...</div>;
    }

    if(isAuthenticated){
        return children;
    }

    return <Navigate to="/login" replace />; 
};

export default ProtectedRoute;
