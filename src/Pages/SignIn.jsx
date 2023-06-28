import React, { useState } from 'react';
import InfosecLogo from "../assets/infoseclogo.png";
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import "../Styles/signin.css";
import { FaTwitter } from 'react-icons/fa';
const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', email, password, rememberMe);
    };

    return (
        <div className='container'>
            <div className='logo'>
                <img src={InfosecLogo} alt="logo" />
                <br />
                <h1>Info<span>Sec</span></h1>
            </div>
            <div className='signinSection'>
                <div>
                    <h3 className='mb-5' style={{ color: "gray", textAlign: "center" }}>Login</h3>
                </div>
                <div className='form-container'>
                    <div className='container-xl'>
                        <form onSubmit={handleSubmit} className='need-validation'>
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
                                <div className="invalid-feedback">Invalid email id</div>
                            </div>
                            <div className="mb-3 was-validated">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <div className="invalid-feedback">Please enter password</div>
                            </div>
                            <div className=" mb-2 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="rememberMe"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                            </div>
                            <button type="submit" className="btn mb-3">Sign In</button>
                        </form>

                        <div className='btn1 mt-3'>
                            <button type="button" className='p-2 mb-3'> <FcGoogle size={25} /> <span className='px-3 fs-6 fw-semibold text-body-secondary'>Continue with Google</span></button>
                            <button type="button" className='p-2 mb-3'> <FaTwitter size={25} style={{ color: "#499eda" }} /> <span className='px-3 fs-6 fw-semibold text-body-secondary'>Continue with Twitter</span></button>
                            <button type="button" className='p-2 mb-3'> <BsFacebook size={25} style={{ color: "#0a87ed" }} /> <span className='px-3 fs-6 fw-semibold text-body-secondary'>Continue with FaceBook</span></button>
                        </div>
                    </div>

                    <div style={{ textAlign: "center", color: "gray" }}>You don't have an account yet? <span style={{ color: "#5460fb" }} className='fw-semibold px-3' ><Link to="/register" className='text-decoration-none'>Sign Up</Link></span></div>

                </div>
            </div>
        </div>
    );
}

export default SignIn;
