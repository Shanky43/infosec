import React, { useEffect, useState } from 'react';
import "./tabv5.css";
import ChangePasswordTab from '../ChangePassowrdTab/ChangePasswordTab';

const Tabv5 = ({ updatePassword }) => {
    console.log(updatePassword, 'inside tabv5')
    const [changePassword, setChangePassword] = useState(false);
    useEffect(() => {
        if (!updatePassword) {
            setChangePassword(false)
        }
    }, [updatePassword])

    const handleUpdateButton = () => {
        setChangePassword(true);
    };

    return (
        <div>
            {changePassword === true ? <ChangePasswordTab setChangePassword={setChangePassword} /> :
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

                </div>}
        </div>
    );
};

export default Tabv5;
