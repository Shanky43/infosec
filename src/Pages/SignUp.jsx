import React, { useState } from 'react';
import InfosecLogo from "../assets/infoseclogo.png";
import "../Styles/signup.css";
import { FcGoogle } from 'react-icons/fc';
import { FaTwitter } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', firstName, lastName, email, password);
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
          <h3 className='mb-5' style={{ color: "gray" }}>Register</h3>
        </div>
        <div className='form-container'>
          <div className='container-xl'>
            <form onSubmit={handleSubmit} className='need-validation'>
              <div className="mb-3 d-flex">
                <div className="me-2" style={{ flex: 1 }}>
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="ms-2" style={{ flex: 1 }}>
                  <label htmlFor="lastName" className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="mb-3 was-validated">
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
              <div className="mb-4 was-validated">
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

              <button type="submit" className="btn mb-3">Register</button>
            </form>
            <div> <p style={{ textAlign: 'center' }}>or</p></div>
            <div className='social media'>
              <div className='btn1'>
                <button type="button" className='p-2 mb-3'> <FcGoogle size={25} /> <span className='px-3 fs-6 fw-semibold text-body-secondary'>Continue with Google</span></button>
                <button type="button" className='p-2 mb-3'> <FaTwitter size={25} style={{ color: "#499eda" }} /> <span className='px-3 fs-6 fw-semibold text-body-secondary'>Continue with Twitter</span></button>
                <button type="button" className='p-2 mb-3'> <BsFacebook size={25} style={{ color: "#0a87ed" }} /> <span className='px-3 fs-6 fw-semibold text-body-secondary'>Continue with Facebook</span></button>
              </div>
            </div>
            <div style={{ textAlign: "center", color: "gray" }}>Already have an account? <span style={{ color: "#5460fb" }} className='fw-semibold px-3'><Link to="/login" className='text-decoration-none'>Login here.</Link></span></div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
