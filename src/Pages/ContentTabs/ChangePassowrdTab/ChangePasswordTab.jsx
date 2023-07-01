import React, { useState } from 'react';
import './changePasswordTab.css';

const ChangePasswordTab = ({ setChangePassword }) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


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
    const handleChangePassword = () => {
        setChangePassword(false)
    }
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
                                type="text"
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
                                type="text"
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
                                type="text"
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
