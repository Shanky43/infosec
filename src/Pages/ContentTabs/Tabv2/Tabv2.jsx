import React, { useEffect, useState } from 'react'
import "./tabv2.css"
import Cookies from 'js-cookie'


const Tabv2 = () => {
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
    return (
        <div className='CompanyDetails'>
            <div className="frame162">
                <div className="group112">
                    <div className="userName">
                        <div className="user">
                            <div className='userSymbol'>
                                <p>{userInitials}</p>
                            </div>
                        </div>
                        <div className='group66'>
                            <div className="CompanyName">
                                <p>{"Company Name"}</p>
                            </div>
                            <div className="DisplayName">
                                <p>{"Display name"}</p>
                            </div>
                        </div>

                    </div>
                </div>
                {/* website section start here */}
                <div className="group64">
                    <div className="website">
                        <p>Website</p>
                    </div>
                    <div className="websiteLink">
                        <p>{"https://infosec-future.com/"}</p>
                    </div>
                </div>
                {/* description section start here */}
                <div className="CompanyDescriptionSection">
                    <div className="descr">
                        <p>Description</p>
                    </div>
                    <div className="userDescription">
                        <p>
                            InfoSec Future - based in Delhi, India - is an emerging provider of IT Security Training and Services to corporations and aspiring IT Professionals. It is well equipped with internationally certified instructors to impart the skills needed to secure one’s information in an increasingly connected world.InfoSec Future addresses the entire spectrum of information security training with live and practical demo.Welcome to the world of Hacking and Security.
                        </p>
                    </div>
                </div>
                {/* Register Number Section start here */}
                <div className="RegisterNumberSection">
                    <div className="RegisterNumber">
                        <p>Registration Number</p>
                    </div>
                    <div className="userNumber">
                        <p>{"78945612587"}</p>
                    </div>
                </div>

                {/* Number of employee section start here */}
                <div className="EmployeeNumberSection">
                    <div className="employeeNumbers">
                        <p>Number of Employes</p>
                    </div>
                    <div className="numberOfEmployees">
                        <p>{"200"}+</p>
                    </div>
                </div>

                {/* edit button for company section start here */}
                <div className="CompanyDetailsEditButton">
                    <div className="Edit_button">
                        <p>Edit</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Tabv2