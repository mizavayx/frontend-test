import { useState } from 'react';
import { useRegister } from '../../hooks/useRegister';

import Layout from './../../components/Layout/Layout';
import '../../styles/AuthStyles.css';

const Register = () => {
  const [fullname, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { register, error, isLoading } = useRegister();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();

    await register(fullname, username, password);
  };

  return (
    <Layout title="Register - Student Management App">
      <div className="form-container ">
        <form onSubmit={handleSubmit}>
          <h4 className="title">REGISTER FORM</h4>
          <div className="mb-3">
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Full Name "
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Username "
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
            REGISTER
          </button>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </Layout>
  );
};

export default Register;
