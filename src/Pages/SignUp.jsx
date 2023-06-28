import React, { useState } from 'react';
import InfosecLogo from "../assets/infoseclogo.png";
import "../Styles/signup.css";
import { FcGoogle } from 'react-icons/fc';
import { FaTwitter } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', email, password, username);
  };

  return (
    <div className='container'>
      <div className='logo'>
        <img src={InfosecLogo} alt="logo" />
        <br />
        <h1>Info<span>Sec</span></h1>
      </div>
      <div className='registerSection'>
        <div>
          <h3 className='mb-5'>Register</h3>
        </div>
        <div className='form-container'>
          <div className='container-xl'>
            <form onSubmit={handleSubmit} className='need-validation'>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3 was-validated" >
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="invalid-feedback">Invalid email id </div>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-5 was-validated">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="invalid-feedback">Please enter password </div>
              </div>

              <button type="submit" className="btn mb-3 ">Register</button>
            </form>
            <div> <p style={{ textAlign: 'center' }}>or</p></div>
            <div className='social media'>
              <div className='btn1'>
                <button type="button" className='p-2 mb-3'> <FcGoogle size={25} /> <span className='px-3 fs-6 fw-semibold text-body-secondary'>Google</span></button>
                <button type="button" className='p-2 mb-3'> <FaTwitter size={25} style={{ color: "#499eda" }} /> <span className='px-3 fs-6 fw-semibold text-body-secondary'>Twitter</span></button>
                <button type="button" className='p-2 mb-3'> <BsFacebook size={25} style={{ color: "#0a87ed" }} /> <span className='px-3 fs-6 fw-semibold text-body-secondary'>FaceBook</span></button>
              </div>
            </div>
            <div style={{ textAlign: "center", color: "gray" }}>Already have an account? <span style={{ color: "#5460fb" }} className='fw-semibold px-3' >Sign In</span></div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
