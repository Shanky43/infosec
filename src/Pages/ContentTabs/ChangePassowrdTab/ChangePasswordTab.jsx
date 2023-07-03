import React, { useState } from 'react';
import './changePasswordTab.css';

import { useDispatch } from 'react-redux';
import { updatePassword } from '../../../Redux/Login/action';
import Cookies from 'js-cookie';
const ChangePasswordTab = ({ setChangePassword }) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch()

    const handleOldPasswordChange = (e) => {
        setOldPassword(e.target.value);
        console.log(e.target.value, "oldPassword");
    };

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
        console.log(e.target.value, "newPassword");
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        console.log(e.target.value, "confirmPassword");
    };

    const handleChangePassword = async () => {
        let userId = Cookies.get("userId")
        console.log(userId)
        try {
            // Validate the new password and confirm password
            if (newPassword === confirmPassword) {

                const res = await dispatch(updatePassword(userId, oldPassword, confirmPassword));

                // Password updated successfully
                alert(res);

                // Reset the input fields
                setOldPassword('');
                setNewPassword('');
                setConfirmPassword('');

                // Set any success message or trigger any necessary actions
            } else {
                alert('New password and confirm password do not match.');
            }
        } catch (error) {
            console.error(error.message);
            // Handle the error appropriately
        }


    };

    return (
        <div className="tabv6Section">
            <div className="tabv6Section-1">
                {/* Enter the old password section */}
                <div className="enterOldPasswordSection">
                    <div className="ChangePasswordOuterSection">
                        <div className="PasswordWithSemiCol_Section">
                            <div className="PasswordNameSection">
                                <p>Enter Old Password</p>
                            </div>
                            <div className="changePasswordSemiCol">
                                <p>:</p>
                            </div>
                        </div>
                        <div className="InputBox">
                            <input
                                type="password"
                                className="input-box"
                                value={oldPassword}
                                onChange={handleOldPasswordChange}
                            />
                        </div>
                    </div>
                </div>

                {/* Enter new password section */}
                <div className="enterNewPasswordSection">
                    <div className="ChangePasswordOuterSection">
                        <div className="PasswordWithSemiCol_Section">
                            <div className="PasswordNameSection">
                                <p>Enter New Password</p>
                            </div>
                            <div className="changePasswordSemiCol">
                                <p>:</p>
                            </div>
                        </div>
                        <div className="InputBox">
                            <input
                                type="password"
                                className="input-box"
                                value={newPassword}
                                onChange={handleNewPasswordChange}
                            />
                        </div>
                    </div>
                </div>

                {/* Confirm new password section */}
                <div className="confirmNewPasswordSection">
                    <div className="ChangePasswordOuterSection">
                        <div className="PasswordWithSemiCol_Section">
                            <div className="PasswordNameSection">
                                <p>Confirm New Password</p>
                            </div>
                            <div className="changePasswordSemiCol">
                                <p>:</p>
                            </div>
                        </div>
                        <div className="InputBox">
                            <input
                                type="password"
                                className="input-box"
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="ChangeSaveButtonSection" onClick={handleChangePassword}>
                <div className="changeSaveButton">
                    <p>Save</p>
                </div>
            </div>
        </div>
    );
};

export default ChangePasswordTab;
