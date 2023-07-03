import React, { useEffect, useState } from 'react';
import { RiUserSearchLine } from 'react-icons/ri';
import { BsCalendar } from 'react-icons/bs';
import { BsPersonCircle } from 'react-icons/bs';
import { GrFormView, GrShieldSecurity, GrSettingsOption } from 'react-icons/gr';
import { TbUserEdit } from 'react-icons/tb';
import { FaUserLock } from 'react-icons/fa';
import { TbLogout } from 'react-icons/tb';

import './NavBar.css';
import { useSelector } from 'react-redux';

const NavBar = () => {
    const [profilePicture, setProfilePicture] = useState("");
    const { userDetails } = useSelector((state) => ({
        userDetails: state.InfosecReducer.infosecdata.infosecData,
    }));

    useEffect(() => {
        if (userDetails && userDetails.length > 0) {
            const userDetail = userDetails[0];
            setProfilePicture(userDetail.profilepicture);
        }
    }, [userDetails]);

    const handleLogout = () => {
        localStorage.removeItem("isAuth");
        alert("logout successful...");
        window.location.reload();
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary custom-navbar">
                <div className="container-fluid">
                    <a className="navbar-brand d-flex " href="/">
                        <img src="https://github.com/Shanky43/infosec/blob/main/src/assets/infoseclogo.png?raw=true" alt="logo" />
                        <div className="d-flex align-items-center">
                            <p className="px-3 fw-semibold "><span>Securing Digital World</span></p>
                        </div>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mt-3" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link d-flex flex-column align-items-center" aria-current="page" href="/">
                                    <RiUserSearchLine size={25} />
                                    <p className="text-center fs-6 fw-semibold">Search Candidate</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link d-flex flex-column align-items-center" href="/">
                                    <BsCalendar size={25} />
                                    <p className="text-center fs-6 fw-semibold">Post new job</p>
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle d-flex align-items-center" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <div className="profile">
                                        <div className="pl-5 d-flex align-items-center" style={{ paddingLeft: "12px" }}>
                                            {profilePicture !== "" ? (<div className='userProfilePicture'>
                                                <img src={profilePicture} className='avatar' alt="" />
                                            </div>) : <BsPersonCircle size={25} />}
                                        </div>
                                        <p className="text-center fs-6 fw-semibold">Person</p>
                                    </div>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <p className="dropdown-item">
                                            <GrFormView size={26} color="gray" />
                                            <p>View Profile</p>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="dropdown-item">
                                            <TbUserEdit size={25} color="gray" />
                                            <p>Edit Profile</p>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="dropdown-item">
                                            <GrSettingsOption size={25} color="gray" />
                                            <p>Security</p>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="dropdown-item">
                                            <GrShieldSecurity size={25} backgroundColor="grey" />
                                            <p>Security</p>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="dropdown-item">
                                            <FaUserLock size={25} color="gray" />
                                            <p>Privacy</p>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="dropdown-item" onClick={handleLogout}>
                                            <TbLogout size={25} color="gray" />
                                            <p>Logout</p>
                                        </p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
