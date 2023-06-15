import { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { useNavigate } from 'react-router-dom';
import '../../styles/AuthStyles.css';

const Register = () => {
  const [fullname, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(fullname, username, password);
  };

  return (
    <Layout title="Register - Ecommer App">
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
          <button type="submit" className="btn btn-primary">
            REGISTER
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
