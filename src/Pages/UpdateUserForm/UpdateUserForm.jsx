import React, { useState } from 'react';
import './updateuserform.css';

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

    const handleSaveButton = () => {

    }
    const handleCancelButton = () => {
        setWhichTab(false)
    }
    const SocialMedia = ({ media, links }) => {
        const handleLinkChange = (e) => {
            setSocialMediaLinks((prevLinks) => ({
                ...prevLinks,
                [media]: e.target.value
            }));
        };



        return (
            <>

                <div className="updateWithSemicol">
                    <div className="UpdateSocialMediaSection">
                        <p>{media}</p>
                    </div>
                    <div className="UpdateSocialMediaSemiCol">
                        <p>:</p>
                    </div>
                </div>
                <div className="UpdateInputSection">
                    <div className="Updatelinks">
                        <input
                            type="text"
                            className="updateSocialMediaInput "
                            value={links}
                            onChange={handleLinkChange}
                        />
                    </div>

                </div>
                <div className="UpdateSaveSection">
                    <div className="UpdateSaveField">
                        <p>Save</p>
                    </div>
                </div>

            </>
        );
    };

    const FieldGenerator = ({ message, value, onChange }) => {
        return (
            <div className="Section_1">
                <div className="fieldMessage">
                    <p>{message}</p>
                </div>
                <div className="fieldSemiCol">
                    <p>:</p>
                </div>
                <div>
                    <input
                        type="text"
                        className="userInputSection"
                        value={value}
                        onChange={onChange}
                    />
                </div>
                <div className="fieldSaveSection">
                    <div className="FieldSaveButton">
                        <p>Save</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="UpdateUserFormSection">
            <div className="formSection-1">
                <div className="full-name">
                    <FieldGenerator
                        message={"Full Name"}
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </div>
                <div className="field-designation">
                    <FieldGenerator
                        message={"Designation"}
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                    />
                </div>
                <div className="field-designation">
                    <FieldGenerator
                        message={"Email Address"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="field-dob">
                    <FieldGenerator
                        message={"Date of Birth"}
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                    />
                </div>
                <div className="field-contactnumber">
                    <FieldGenerator
                        message={"Contact Number"}
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                    />
                </div>
                <div className="field-city">
                    <FieldGenerator
                        message={"City"}
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div className="field-profilepicture">
                    <FieldGenerator
                        message={"Profile Picture"}
                        value={profilePicture}
                        onChange={(e) => setProfilePicture(e.target.value)}
                    />
                </div>
            </div>

            <div className="UpdatedFieldSocialMedia">
                <div className="socialMedia_1">
                    <p>Social Media</p>
                </div>
            </div>

            <div className="UpdateSocialMediaLinks">
                <div className="UpdateLinkedIn">
                    <SocialMedia media={"LinkedIn"} links={socialMediaLinks.LinkedIn} />
                </div>
                <div className="UpdateTwitter">
                    <SocialMedia media={"Twitter"} links={socialMediaLinks.Twitter} />
                </div>
                <div className="UpdateFacebook">
                    <SocialMedia media={"Facebook"} links={socialMediaLinks.Facebook} />
                </div>
                <div className="UpdateInstagram">
                    <SocialMedia media={"Instagram"} links={socialMediaLinks.Instagram} />
                </div>
                <div className="UpdateOther">
                    <SocialMedia media={"Other"} links={socialMediaLinks.Other} />
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
