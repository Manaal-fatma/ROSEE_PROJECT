import React, { useState, useContext } from 'react';
import './CSS/LoginSignup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { toast } from 'react-toastify';
console.log("URL:", process.env.REACT_APP_BACKEND_URL);
console.log("Test var:", process.env.REACT_APP_TEST_VAR);
console.log("All envs:", process.env);


const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(false); // toggle between Login and Signup
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const {login} = useContext(ShopContext);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  
  if (!backendUrl) {
    return <div style={{ color: 'red' }}>Backend URL is not defined. Check your .env file.</div>;
  }

  const handleSubmit = async () => {
    if (!email || !password || (!isLogin && !name)) {
      toast.warn("Please fill all required fields", {
      position: "top-right",
      autoClose: 2000,
    });
      return;
    }

    try {
      if (isLogin) {
        // LOGIN
        const res = await axios.post(`${backendUrl}/api/user/login`, {
          email,
          password,
        });

        if (res.data.success) {
         login(res.data.token, email);
          toast.success("Login successful", {
          position: "top-right",
          autoClose: 2000,
        });
          navigate('/');
        }
      } else {
        // SIGNUP
        const res = await axios.post(`${backendUrl}/api/user/register`, {
          name,
          email,
          password,
        });

        if (res.data.success) {
          login(res.data.token, email);
           toast.success("Signup successful", {
          position: "top-right",
          autoClose: 2000,
        });
          navigate('/');
        }
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong", {
      position: "top-right",
      autoClose: 2000,
    });
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <div className="loginsignup-fields">
          {!isLogin && (
            <input
              type="text"
              placeholder='Enter your name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            type="email"
            placeholder='Enter your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder='Enter your Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit}>Continue</button>
        <p className='loginsignup-login'>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? ' Sign up here' : ' Login here'}
          </span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>By continuing I agree to the terms of use & privacy policy </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
