import React, { useEffect, useState } from 'react'
import "./sidebar.css"
import { BsFillBuildingsFill, BsFileText } from "react-icons/bs"
import { MdNoteAlt } from "react-icons/md"
import { GiHandBag } from "react-icons/gi"
import { LuSettings } from "react-icons/lu"
import { TbLogout } from "react-icons/tb"
import { useSelector } from 'react-redux'
import Cookies from 'js-cookie'

const SideBar = () => {
    const [userName, setUserName] = useState("")
    const [userInitials, setUserInitials] = useState("")

    useEffect(() => {
        let userName = Cookies.get("username")
        const capitalizedFullName = userName
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        setUserName(capitalizedFullName)

        const initials = userName
            .split(' ')
            .map((name) => name.charAt(0).toUpperCase())
            .join('');
        setUserInitials(initials);

    }, [])
    const handleLogout = () => {
        localStorage.removeItem("isAuth");
        alert("logout successfull...")
        window.location.reload();
    }
    return (
        <div className=' d-flex justify-content-between'>
            <div className='sidebar-box '>
                <div className='sidebar-content'>
                    <div className='group37'>
                        <div className="frame212">
                            <p className='profileName text-center'>{userName}</p>
                        </div>
                        <div className='frame36'>
                            <div className="ellipse1">
                                <div className="userprofilename">
                                    <p className="username">{userInitials}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="frame213">
                        <div className="group34">

                            <div className="company">
                                <div className="companybuilding"><BsFillBuildingsFill size={22} />
                                </div>
                                <div className='companydetails'><p >Company Details</p></div>
                            </div>

                            <div className="note">
                                <div className="frame48">
                                    <div className="noteicon">
                                        <MdNoteAlt size={30} />
                                        <div className='notedetails'><p>Add a job</p></div>
                                    </div>

                                </div>
                            </div>
                            <div className="frame55">
                                <div className="frame54">
                                    <div className="jobsearchicon">
                                        <GiHandBag size={24} />
                                        <div className="jobs"><p>Jobs</p></div>
                                    </div>

                                </div>
                                <div className="frame53">
                                    <ul>
                                        <li>Posted Jobs</li>
                                        <li>Drafts</li>
                                        <li>Closed Jobs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="group33">
                            <div className="group35">
                                <div className="applicationsection">
                                    <div className="frame50">
                                        <div className="applicationicon">
                                            <BsFileText size={25} />
                                            <div className="applicationname">
                                                <p>Applications</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="frame151">
                                    <div className="frame150">

                                        <p>View Applications</p>
                                        <p>Shortlisted Candidates</p>
                                        <p>Hired Candidates</p>
                                        <p>Rejected Candidates</p>

                                    </div>
                                </div>


                            </div>

                        </div>
                        <div className="group210">
                            <div className="settingicon">
                                <LuSettings size={23} />
                                <div className="settingname">
                                    Settings
                                </div>
                            </div>

                            <div className="logoutsection" onClick={handleLogout}>
                                <div className="group38">
                                    <div className="logouticon">
                                        <TbLogout size={28} />
                                        <div className="logoutname">Logout</div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>



                </div>



            </div>

        </div>

    )
}

export default SideBar