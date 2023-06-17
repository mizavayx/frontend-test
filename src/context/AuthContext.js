import { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload };
    case 'LOGOUT':
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  //default axios
  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${state?.user?.token}`;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      dispatch({ type: 'LOGIN', payload: user });
    }

    //eslint-disable-next-line
  }, []);

  console.log('AuthContext state:', state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
