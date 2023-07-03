import React, { useEffect, useState } from 'react';
import InfosecLogo from "../assets/infoseclogo.png";
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import "../Styles/signin.css";
import { FaTwitter } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { loginAccount } from '../Redux/Login/action';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        let value = {
            email,
            password,
        };
        dispatch(loginAccount(value)).then(() => {
            // Account creation successful
            alert("Login Successfull...");
            navigate("/");
        })
            .catch(() => {
                // Account creation failed
                alert("Wrong Credentials");
                navigate("/login");
            });
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
                            <button type="submit" className="btn mb-3">Login</button>
                        </form>

                        <div className='btn2 mt-3 mb-3'>
                            <button type="button" className='p-2 mb-3'> <FcGoogle size={25} /></button>
                            <button type="button" className='p-2 mb-3'> <FaTwitter size={25} style={{ color: "#499eda" }} /> </button>
                            <button type="button" className='p-2 mb-3'> <BsFacebook size={25} style={{ color: "#0a87ed" }} /> </button>
                        </div>
                    </div>

                    <div style={{ textAlign: "center", color: "gray" }}>You don't have an account yet? <span style={{ color: "#5460fb" }} className='fw-semibold px-3' ><Link to="/register" className='text-decoration-none'>Register</Link></span></div>

                </div>
            </div>
        </div>
    );
}

export default SignIn;
