import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';

import Layout from './../../components/Layout/Layout';
import '../../styles/AuthStyles.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(username, password);
  };

  return (
    <Layout title="Login - Student Management App">
      <div className="form-container ">
        <form onSubmit={handleSubmit}>
          <h4 className="title">LOGIN FORM</h4>
          <div className="mb-3">
            <input
              type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Username"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>

          <button
            disabled={isLoading}
            type="submit"
            className="btn btn-primary"
          >
            LOGIN
          </button>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </Layout>
  );
};

export default Login;
