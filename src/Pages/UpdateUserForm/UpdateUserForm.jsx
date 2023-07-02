import React, { useEffect, useState } from 'react';
import './updateuserform.css';
import { useDispatch, useSelector } from 'react-redux';
import { patchInfosecData } from '../../Redux/InfosecData/action';


const UpdateUserForm = ({ setWhichTab }) => {
    const [fullName, setFullName] = useState('');
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

    const { userDetails } = useSelector((state) => ({
        userDetails: state.InfosecReducer.infosecdata.infosecData,
    }));
    const dispatch = useDispatch()
    const handleSaveButton = () => {
        const updatedData = {
            fullName: fullName || userDetails[0].fullName,
            designation: designation || userDetails[0].designation,
            emailaddress: email || userDetails[0].emailaddress,
            dob: dateOfBirth || userDetails[0].dob,
            contactnumber: contactNumber || userDetails[0].contactnumber,
            city: city || userDetails[0].city,
            profilepicture: profilePicture || userDetails[0].profilepicture,
            linkedin: socialMediaLinks.LinkedIn || userDetails[0].linkedin,
            twitter: socialMediaLinks.Twitter || userDetails[0].twitter,
            facebook: socialMediaLinks.Facebook || userDetails[0].facebook,
            instagram: socialMediaLinks.Instagram || userDetails[0].instagram,
            other: socialMediaLinks.Other || userDetails[0].other,
        };

        updatedData.userId = userDetails[0].userId;

        console.log(updatedData); // Do whatever you want with the updated data
        let updateId = userDetails[0]._id;

        return dispatch(patchInfosecData(updateId, updatedData))
            .then((res) => {
                alert(res)
                window.location.reload()
                // Handle the response data here if needed
            })
            .catch((err) => {
                alert(err)
                window.location.reload()
                // Handle the error here if needed
            });
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
                        <div className="fieldSaveSection">
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
                        <div className="fieldSaveSection">
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
                            />
                        </div>
                        <div className="fieldSaveSection">
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
                        <div className="fieldSaveSection">
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
                        <div className="fieldSaveSection">
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
                        <div className="fieldSaveSection">
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
                        <div className="fieldSaveSection">
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
                    <div className="UpdateSaveSection">
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
                        <div className="UpdateSaveField">
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
                    <div className="UpdateSaveSection">
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
                    <div className="UpdateSaveSection">
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
                    <div className="UpdateSaveSection">
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
                    <div className="UpdatesaveSection">
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
