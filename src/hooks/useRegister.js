import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

export const useRegister = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  const register = async (fullname, username, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await axios.post('/api/v1/auth/register', {
        fullname,
        username,
        password,
      });

      if (res.data.success) {
        // save the user to local storage
        localStorage.setItem('user', JSON.stringify(res.data.data));
        navigate(location.state || '/');

        // update the auth context
        dispatch({ type: 'LOGIN', payload: res.data.data });

        // update loading state
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error.response.data.message);
    }
  };

  return { register, isLoading, error };
};
