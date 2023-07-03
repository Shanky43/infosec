import React, { useEffect, useState } from 'react';
import './tabv1.css';
import { useDispatch, useSelector } from 'react-redux';
import { getInfosecData } from '../../../Redux/InfosecData/action';
import Cookies from 'js-cookie';


function SocialMedia(props) {
    const { media, links, handleShowEdit } = props;

    return (
        <>
            <div className="SocialMediaSection">
                <p>{media}</p>
            </div>
            <div className="semiCol">
                <p>:</p>
            </div>
            <div className="allSocialMediaLinks">
                <div className="links">
                    <p>{links}</p>
                </div>
                <div className="editSection">
                    <div className="editbutton" onClick={handleShowEdit}>
                        <p>Edit</p>
                    </div>
                </div>
            </div>
        </>
    );
}

const Tabv1 = ({ setWhichTab }) => {

    const { userDetails } = useSelector((state) => ({
        userDetails: state.InfosecReducer.infosecdata.infosecData,
    }));
    const [userDetail, setUserDetail] = useState("");
    console.log(userDetails);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInfosecData());
    }, [dispatch]);

    const handleShowEdit = () => {
        setWhichTab(true);
    };
    useEffect(() => {
        if (userDetails && userDetails.length > 0) {
            setUserDetail(userDetails[0]);
        } else {
            // Set dummy data or default values when userDetails is empty
            setUserDetail({
                fullName: Cookies.get("username"),
                designation: 'Software Engineer',
                emailaddress: Cookies.get("email"),
                dob: '1990-01-01',
                contactnumber: '+1234567890',
                city: 'New York',
                linkedin: 'https://www.linkedin.com/johndoe',
                twitter: 'https://www.twitter.com/johndoe',
                facebook: 'https://www.facebook.com/johndoe',
                instagram: 'https://www.instagram.com/johndoe',
                other: 'https://www.example.com/johndoe',
            });
        }
    }, [userDetails]);



    // Destructure the userDetails array and extract the first element


    return (
        <div className="tabv1section">
            <div className="group165">
                <div className="group165textandicon">
                    <div className="fullnameSection">
                        <div className="fullname">
                            <p>Full Name :</p>
                        </div>
                        <div className="usernameSection">
                            <p>{userDetail.fullName}</p>
                        </div>
                    </div>
                    <div className="Editsection">
                        <div className="edit" onClick={handleShowEdit}>
                            <p>Edit</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="group166">
                <div className="group166TextandIcon">
                    <div className="group68">
                        <div className="designationSection">
                            <div className="designation">
                                <p>Designation :</p>
                            </div>
                            <div className="usersDesignation">
                                <p>{userDetail.designation}</p>
                            </div>
                        </div>
                        <div className="Editsection">
                            <div className="edit" onClick={handleShowEdit}>
                                <p>Edit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="group167">
                <div className="group167textandicon">
                    <div className="emailSection">
                        <div className="emailAddress">
                            <div className="email">
                                <p>Email Address :</p>
                            </div>
                            <div className="userEmail">
                                <p>{userDetail.emailaddress}</p>
                            </div>
                        </div>
                        <div className="Editsection">
                            <div className="edit disabled">
                                <p>Edit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="group168">
                <div className="group168textandicon">
                    <div className="DOBSection">
                        <div className="DOBaddress">
                            <div className="DOB">
                                <p>Date of Birth :</p>
                            </div>
                            <div className="userDOB">
                                <p>{userDetail.dob}</p>
                            </div>
                        </div>
                        <div className="Editsection">
                            <div className="edit" onClick={handleShowEdit}>
                                <p>Edit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="group169">
                <div className="group169textandicon">
                    <div className="ContactNumberSection">
                        <div className="ContactSection">
                            <div className="Contact">
                                <p>Contact Number :</p>
                            </div>
                            <div className="userContact">
                                <p>{userDetail.contactnumber}</p>
                            </div>
                        </div>
                        <div className="Editsection">
                            <div className="edit" onClick={handleShowEdit}>
                                <p>Edit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="group170">
                <div className="group170textandicon">
                    <div className="citySection">
                        <div className="cityAddress">
                            <div className="city">
                                <p>City :</p>
                            </div>
                            <div className="userCity">
                                <p>{userDetail.city}</p>
                            </div>
                        </div>
                        <div className="Editsection">
                            <div className="edit" onClick={handleShowEdit}>
                                <p>Edit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="group171">
                <div className="group171textandicon">
                    <div className="ProfilesectionWithEdit">
                        <div className="ProfileSection">
                            <div className="Profile">
                                <p>Profile Picture</p>
                            </div>
                        </div>
                        <div className="UpdateSection">
                            <div className="update" onClick={handleShowEdit}>
                                <p>Update</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="group172">
                <div className="socialMedia">
                    <p>Social Media</p>
                </div>
            </div>
            <div className="socialMediaLinks">
                <div className="group85">
                    <SocialMedia
                        media="LinkedIn"
                        links={userDetail.linkedin}
                        handleShowEdit={handleShowEdit}
                    />
                </div>
                <div className="group86">
                    <SocialMedia
                        media="Twitter"
                        links={userDetail.twitter}
                        handleShowEdit={handleShowEdit}
                    />
                </div>
                <div className="group87">
                    <SocialMedia
                        media="Facebook"
                        links={userDetail.facebook}
                        handleShowEdit={handleShowEdit}
                    />
                </div>
                <div className="group88">
                    <SocialMedia
                        media="Instagram"
                        links={userDetail.instagram}
                        handleShowEdit={handleShowEdit}
                    />
                </div>
                <div className="group89">
                    <SocialMedia
                        media="Other"
                        links={userDetail.other}
                        handleShowEdit={handleShowEdit}
                    />
                </div>
            </div>
        </div>
    );
};

export default Tabv1;
