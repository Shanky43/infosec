import React, { useState } from 'react'
import "./tabv5.css"

const Tabv5 = () => {
    const [changePassword, setChangePassword] = useState(false)
    const handleUpdateButton = () => {
        setChangePassword(true)
        localStorage.setItem("showChangePassword", JSON.stringify(true))
    }
    return (
        <div className="mainTab5">
            <div className='tab5'>
                <div className="securitySection">
                    <div className="updatePassword">
                        <div className="password">
                            <p>Password</p>
                        </div>
                        <div className="updateButton" onClick={handleUpdateButton}>
                            <p>Update</p>
                        </div>
                    </div>
                    <div className="towStepVerification">
                        <div className="varification">
                            <p>2-Step verification</p>
                        </div>
                        <div className="setUp">
                            <p>Set up</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Tabv5