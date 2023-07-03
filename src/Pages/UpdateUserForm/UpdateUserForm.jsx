import React, { useEffect, useState } from 'react';
import './updateuserform.css';
import { useDispatch, useSelector } from 'react-redux';
import { patchInfosecData, postInfosecData } from '../../Redux/InfosecData/action';
import Cookies from 'js-cookie';


const UpdateUserForm = ({ setWhichTab }) => {
    const [fullName, setFullName] = useState(Cookies.get('username') || " ");
    const [designation, setDesignation] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [city, setCity] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const [socialMediaLinks, setSocialMediaLinks] = useState({
        LinkedIn: '',
        Twitter: '',
        Facebook: '',
        Instagram: '',
        Other: ''
    });
    const [allowUpdate, setAllowUpdate] = useState(false)
    const { userDetails } = useSelector((state) => ({
        userDetails: state.InfosecReducer.infosecdata.infosecData,
    }));
    const dispatch = useDispatch()
    useEffect(() => {
        if (userDetails.length > 0) {
            const userDetail = userDetails[0];
            setFullName(userDetail.fullName);
            setDesignation(userDetail.designation);
            setEmail(userDetail.email);
            setDateOfBirth(userDetail.dob);
            setContactNumber(userDetail.contactnumber);
            setCity(userDetail.city);
            setProfilePicture(userDetail.profilepicture);
            setSocialMediaLinks({
                LinkedIn: userDetail.linkedin,
                Twitter: userDetail.twitter,
                Facebook: userDetail.facebook,
                Instagram: userDetail.instagram,
                Other: userDetail.other
            });
            setAllowUpdate(true);
        }
    }, [userDetails]);


    const handleSaveButton = async () => {
        const userId = Cookies.get('userId');
        const email = Cookies.get('email');
        const userData = {
            fullName,
            designation,
            dob: dateOfBirth,
            contactnumber: contactNumber,
            city,
            profilepicture: profilePicture,
            linkedin: socialMediaLinks.LinkedIn,
            twitter: socialMediaLinks.Twitter,
            facebook: socialMediaLinks.Facebook,
            instagram: socialMediaLinks.Instagram,
            other: socialMediaLinks.Other,
            userId,
            email,
        };

        if (userDetails.length === 0) {
            // User details not present in Redux store, create a new user (POST request)
            const hasEmptyValues = Object.values(userData).some((value) => value === '');
            if (hasEmptyValues && allowUpdate === false) {
                alert("You don't have complete data. Please fill in the data first.");
                return;
            } else {
                try {
                    await dispatch(postInfosecData(userData));
                    alert("Data added successfully...");
                    window.location.reload();
                } catch (err) {
                    alert(err);
                    window.location.reload();
                }
            }
        } else {
            // User details present in Redux store, update an existing user (PATCH request)
            if (!userDetails[0]?.userId) {
                // User details in Redux store are incomplete, show alert
                alert("You don't have complete data. Please fill in the data first.");
            } else {
                const updateId = userDetails[0]._id;
                const updatedFields = {};

                for (const key in userData) {
                    if (
                        (userData[key] !== '' || key === 'userId' || key === 'email') && // Check if the field has a value or if it's the userId or email field
                        userData[key] !== userDetails[0][key] // Check if the value is different from the current value in the backend
                    ) {
                        updatedFields[key] = userData[key]; // Add the field to the updatedFields object
                    } else {
                        updatedFields[key] = userDetails[0][key]; // Add the current value from the backend to the updatedFields object
                    }
                }

                if (Object.keys(updatedFields).length === 0) {
                    // No fields to update, show alert
                    alert("No changes to update.");
                    return;
                }

                try {
                    await dispatch(patchInfosecData(updateId, updatedFields));
                    alert("Data updated successfully...");
                    window.location.reload();
                } catch (err) {
                    alert(err);
                    window.location.reload();
                }
            }
        }
    };


    const handleCancelButton = () => {
        setWhichTab(false);
    };

    const handleInputChange = (stateSetter) => (e) => {
        stateSetter(e.target.value);
    };





    const handleSocialMediaLinkChange = (media) => (e) => {
        setSocialMediaLinks((prevLinks) => ({
            ...prevLinks,
            [media]: e.target.value
        }));
    };

    return (
        <div className="UpdateUserFormSection">
            <div className="formSection-1">
                <div className="field-designation">
                    <div className="Section_1">
                        <div className="fieldMessage">
                            <p>Full Name</p>
                        </div>
                        <div className="fieldSemiCol">
                            <p>:</p>
                        </div>
                        <div>
                            <input
                                type="text"
                                className="userInputSection"
                                value={fullName}
                                onChange={handleInputChange(setFullName)}
                            />
                        </div>
                        <div className="fieldSaveSection" onClick={() => setAllowUpdate(true)}>
                            <div className="FieldSaveButton">
                                <p>Save</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="field-designation">
                    <div className="Section_1">
                        <div className="fieldMessage">
                            <p>Designation</p>
                        </div>
                        <div className="fieldSemiCol">
                            <p>:</p>
                        </div>
                        <div>
                            <input
                                type="text"
                                className="userInputSection"
                                value={designation}
                                onChange={handleInputChange(setDesignation)}
                            />
                        </div>
                        <div className="fieldSaveSection" onClick={() => setAllowUpdate(true)}>
                            <div className="FieldSaveButton">
                                <p>Save</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="field-designation">
                    <div className="Section_1">
                        <div className="fieldMessage">
                            <p>Email Address</p>
                        </div>
                        <div className="fieldSemiCol">
                            <p>:</p>
                        </div>
                        <div>
                            <input
                                type="text"
                                className="userInputSection"
                                value={email}
                                onChange={handleInputChange(setEmail)}
                                disabled
                            />
                        </div>
                        <div className="fieldSaveSection" onClick={() => setAllowUpdate(true)}>
                            <div className="FieldSaveButton">
                                <p>Save</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="field-designation">
                    <div className="Section_1">
                        <div className="fieldMessage">
                            <p>Date of Birth</p>
                        </div>
                        <div className="fieldSemiCol">
                            <p>:</p>
                        </div>
                        <div>
                            <input
                                type="text"
                                className="userInputSection"
                                value={dateOfBirth}
                                onChange={handleInputChange(setDateOfBirth)}
                            />
                        </div>
                        <div className="fieldSaveSection" onClick={() => setAllowUpdate(true)}>
                            <div className="FieldSaveButton">
                                <p>Save</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="field-designation">
                    <div className="Section_1">
                        <div className="fieldMessage">
                            <p>Contact Number</p>
                        </div>
                        <div className="fieldSemiCol">
                            <p>:</p>
                        </div>
                        <div>
                            <input
                                type="text"
                                className="userInputSection"
                                value={contactNumber}
                                onChange={handleInputChange(setContactNumber)}
                            />
                        </div>
                        <div className="fieldSaveSection" onClick={() => setAllowUpdate(true)}>
                            <div className="FieldSaveButton">
                                <p>Save</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="field-designation">
                    <div className="Section_1">
                        <div className="fieldMessage">
                            <p>City</p>
                        </div>
                        <div className="fieldSemiCol">
                            <p>:</p>
                        </div>
                        <div>
                            <input
                                type="text"
                                className="userInputSection"
                                value={city}
                                onChange={handleInputChange(setCity)}
                            />
                        </div>
                        <div className="fieldSaveSection" onClick={() => setAllowUpdate(true)}>
                            <div className="FieldSaveButton">
                                <p>Save</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="field-designation">
                    <div className="Section_1">
                        <div className="fieldMessage">
                            <p>Profile Picture</p>
                        </div>
                        <div className="fieldSemiCol">
                            <p>:</p>
                        </div>
                        <div>
                            <input
                                type="text"
                                className="userInputSection"
                                value={profilePicture}
                                onChange={handleInputChange(setProfilePicture)}
                            />
                        </div>
                        <div className="fieldSaveSection" onClick={() => setAllowUpdate(true)}>
                            <div className="FieldSaveButton">
                                <p>Save</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="UpdatedFieldSocialMedia">
                <div className="socialMedia_1">
                    <p>Social Media</p>
                </div>
            </div>

            <div className="UpdateSocialMediaLinks">
                <div className="UpdateLinkedIn">
                    <div className="updateWithSemicol">
                        <div className="UpdateSocialMediaSection">
                            <p>LinkedIn</p>
                        </div>
                        <div className="UpdateSocialMediaSemiCol">
                            <p>:</p>
                        </div>
                    </div>
                    <div className="UpdateInputSection">
                        <div className="Updatelinks">
                            <input
                                type="text"
                                className="updateSocialMediaInput"
                                value={socialMediaLinks.LinkedIn}
                                onChange={handleSocialMediaLinkChange('LinkedIn')}
                            />
                        </div>
                    </div>
                    <div className="UpdateSaveSection" onClick={() => setAllowUpdate(true)}>
                        <div className="UpdateSaveField">
                            <p>Save</p>
                        </div>
                    </div>
                </div>
                <div className="UpdateTwitter">
                    <div className="updateWithSemicol">
                        <div className="UpdateSocialMediaSection">
                            <p>Twitter</p>
                        </div>
                        <div className="UpdateSocialMediaSemiCol">
                            <p>:</p>
                        </div>
                    </div>
                    <div className="UpdateInputSection">
                        <div className="Updatelinks">
                            <input
                                type="text"
                                className="updateSocialMediaInput"
                                value={socialMediaLinks.Twitter}
                                onChange={handleSocialMediaLinkChange('Twitter')}
                            />
                        </div>
                    </div>
                    <div className="UpdateSaveSection">
                        <div className="UpdateSaveField" onClick={() => setAllowUpdate(true)}>
                            <p>Save</p>
                        </div>
                    </div>
                </div>
                <div className="UpdateFacebook">
                    <div className="updateWithSemicol">
                        <div className="UpdateSocialMediaSection">
                            <p>Facebook</p>
                        </div>
                        <div className="UpdateSocialMediaSemiCol">
                            <p>:</p>
                        </div>
                    </div>
                    <div className="UpdateInputSection">
                        <div className="Updatelinks">
                            <input
                                type="text"
                                className="updateSocialMediaInput"
                                value={socialMediaLinks.Facebook}
                                onChange={handleSocialMediaLinkChange('Facebook')}
                            />
                        </div>
                    </div>
                    <div className="UpdateSaveSection" onClick={() => setAllowUpdate(true)}>
                        <div className="UpdateSaveField">
                            <p>Save</p>
                        </div>
                    </div>
                </div>
                <div className="UpdateInstagram">
                    <div className="updateWithSemicol">
                        <div className="UpdateSocialMediaSection">
                            <p>Instagram</p>
                        </div>
                        <div className="UpdateSocialMediaSemiCol">
                            <p>:</p>
                        </div>
                    </div>
                    <div className="UpdateInputSection">
                        <div className="Updatelinks">
                            <input
                                type="text"
                                className="updateSocialMediaInput"
                                value={socialMediaLinks.Instagram}
                                onChange={handleSocialMediaLinkChange('Instagram')}
                            />
                        </div>
                    </div>
                    <div className="UpdateSaveSection" onClick={() => setAllowUpdate(true)}>
                        <div className="UpdateSaveField">
                            <p>Save</p>
                        </div>
                    </div>
                </div>
                <div className="UpdateOther">
                    <div className="updateWithSemicol">
                        <div className="UpdateSocialMediaSection">
                            <p>Other</p>
                        </div>
                        <div className="UpdateSocialMediaSemiCol">
                            <p>:</p>
                        </div>
                    </div>
                    <div className="UpdateInputSection">
                        <div className="Updatelinks">
                            <input
                                type="text"
                                className="updateSocialMediaInput"
                                value={socialMediaLinks.Other}
                                onChange={handleSocialMediaLinkChange('Other')}
                            />
                        </div>
                    </div>
                    <div className="UpdateSaveSection" onClick={() => setAllowUpdate(true)}>
                        <div className="UpdateSaveField">
                            <p>Save</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="Updateoptions">
                    <div className="UpdatecancelSection" onClick={handleCancelButton}>
                        <div className="Updatecancelbutton">
                            <p>Cancel</p>
                        </div>
                    </div>
                    <div className="UpdatesaveSection" onClick={() => setAllowUpdate(true)}>
                        <div className="Updatesavebutton" onClick={handleSaveButton}>
                            <p>Save</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateUserForm;
