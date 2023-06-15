import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  const login = async (username, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await axios.post('/api/v1/auth/login', {
        username,
        password,
      });

      console.log(res);
      if (!res.success) {
        setIsLoading(false);
        setError(res.data);
      }
      if (res.success) {
        toast.success(res.data && res.data.message);

        // save the user to local storage
        localStorage.setItem('user', JSON.stringify(res.data));
        navigate(location.state || '/');

        // update the auth context
        dispatch({ type: 'LOGIN', payload: res });

        // update loading state
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  return { login, isLoading, error };
};
